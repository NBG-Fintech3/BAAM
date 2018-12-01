pragma solidity ^0.4.21;

contract WorkbenchBase {
    event WorkbenchContractCreated(string applicationName, string workflowName, address originatingAddress);
    event WorkbenchContractUpdated(string applicationName, string workflowName, string action, address originatingAddress);

    string internal ApplicationName;
    string internal WorkflowName;

    constructor(string applicationName, string workflowName) internal {
        ApplicationName = applicationName;
        WorkflowName = workflowName;
    }

    function ContractCreated() internal {
        emit WorkbenchContractCreated(ApplicationName, WorkflowName, msg.sender);
    }

    function ContractUpdated(string action) internal {
        emit WorkbenchContractUpdated(ApplicationName, WorkflowName, action, msg.sender);
    }
}

contract BAAM_TransferAssets2 is WorkbenchBase("BAAM_TransferAssets2", "BAAM_TransferAssets2")
{
    enum StateType { Active, OfferPlaced, PendingInspection, Inspected, Accepted, Terminated }
    
    string public AssetCode;
    string public AssetName;
    string public AssetType;
    string public AssetCountry;
    uint public MarketPrice;
    uint public DistressedPrice;

    StateType public State;
    address public InstanceAdmin;
    address public InstanceBuyer;
    address public InstanceBankInspector;

    constructor(string aCode, string aName, string aType, string aCountry, uint256 mPrice, uint256 dPrice) public
    {
        InstanceAdmin = msg.sender;
        State = StateType.Active;
        AssetCode = aCode;
        AssetName = aName;
        AssetType = aType;
        AssetCountry = aCountry;
        MarketPrice = mPrice;
        DistressedPrice = dPrice;

        ContractCreated();
    }

    function Terminate() public
    {
        if (InstanceAdmin != msg.sender)
        {
            revert();
        }

        State = StateType.Terminated;
        ContractUpdated("Terminate");
    }



    function MakeOffer() public
    {
        if (State != StateType.Active)
        {
            revert();
        }
        // Cannot enforce "AllowedRoles":["Buyer"] because Role information is unavailable
        if (InstanceAdmin == msg.sender) // not expressible in the current specification language
        {
            revert();
        }

        InstanceBuyer = msg.sender;
        State = StateType.OfferPlaced;
        ContractUpdated("MakeOffer");
    }

    function AcceptOffer(address BankInspector) public
    {
        if (BankInspector == 0x0)
        {
            revert();
        }
        if (State != StateType.OfferPlaced)
        {
            revert();
        }
        if (InstanceAdmin != msg.sender)
        {
            revert();
        }
        InstanceBankInspector = BankInspector;
        State = StateType.PendingInspection;
        ContractUpdated("AcceptOffer");
    }

    function Reject() public
    {
        if (State != StateType.OfferPlaced && State != StateType.PendingInspection && State != StateType.Inspected)
        {
            revert();
        }
        if (InstanceAdmin != msg.sender)
        {
            revert();
        }

        InstanceBuyer = 0x0;
        State = StateType.Active;
        ContractUpdated("Reject");
    }

    function Accept() public
    {
        if (msg.sender == InstanceBuyer && State == StateType.Inspected)
        {
            State = StateType.Accepted;
        }
        ContractUpdated("Accept");
    }

    function RescindOffer() public
    {
        if (State != StateType.OfferPlaced && State != StateType.PendingInspection && State != StateType.Inspected)
        {
            revert();
        }
        if (InstanceBuyer != msg.sender)
        {
            revert();
        }

        InstanceBuyer = 0x0;
        State = StateType.Active;
        ContractUpdated("RescindOffer");
    }

    function MarkInspected() public
    {
        if (InstanceBankInspector != msg.sender)
        {
            revert();
        }

        if (State == StateType.PendingInspection)
        {
            State = StateType.Inspected;
        }
        else
        {
            revert();
        }
        ContractUpdated("MarkInspected");
    }
    function MarkRejected() public
    {
        if (InstanceBankInspector != msg.sender)
        {
            revert();
        }

        if (State == StateType.PendingInspection)
        {
            State = StateType.Inspected;
        }
        else
        {
            revert();
        }
        ContractUpdated("MarkRejected");
    }
}