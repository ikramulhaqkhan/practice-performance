
// function ClaimStatusInquiryAPi(_File, $http, $scope) {
//     $http.defaults.headers.common["Authorization"] = "Bearer " + window.localStorage.authorizationData;


// }

//generate claim status file 276
function generateClaimStatusFile276(Claimdata, payerId, payerName) {

    var Count = 0;
    var UserName = "AvailityUserName";
    var Password = "AvailityPassword";
    var SubmitterId = "AvailitySubmitterId";
    var ReceiverId = "AvailityReceiverId";
    var ClearingHouseCode = "ClearingHouseCode";
    var ReceiverCode = payerId;
    var ISA13 = getISAControlNumber();
    var result = "";

    result = result + "ISA*03*" + PadRight(UserName.trim(), 10, " ") + "*01*" + PadRight(Password.trim(), 10, " ") + "*ZZ*" + PadRight(SubmitterId, 15, " ") + "*01*" + PadRight(ReceiverId, 15, " ") + "*" + PadRight(myGetDate(6), 6, " ") + "*" + PadRight(getTime(), 4, " ") + "*^*00501*" + ISA13 + "*0*P*:~";
    result = result + "GS*HR*" + ClearingHouseCode + "*" + ReceiverCode + "*" + myGetDate(8) + "*" + getTime() + "*1*X*005010X212~";
    Count++;

    ST_TransactionSetIdentifierCode_01 = "276";
    ST_TransactionSetControlNumber_02 = "28487";
    ST_ImplementationConventionPreference_03 = "005010X212";
    result = result + "ST*" + ST_TransactionSetIdentifierCode_01 + "*" + ST_TransactionSetControlNumber_02 + "*" + ST_ImplementationConventionPreference_03 + "~";
    Count++;

    BHT_HierarchicalStructureCode_01 = "0010";
    BHT_TransactionSetPurposeCode_02 = "13";
    BHT_SubmitterTransactionIdentifier_03 = "CM284870VN1910011557345PM";
    BHT_TransactionSetCreationDate_04 = myGetDate(8);
    BHT_TransactionSetCreationTime_05 = getTime();
    result = result + "BHT*" + BHT_HierarchicalStructureCode_01 + "*" + BHT_TransactionSetPurposeCode_02 + "*" + BHT_SubmitterTransactionIdentifier_03 + "*" + BHT_TransactionSetCreationDate_04 + "*" + BHT_TransactionSetCreationTime_05 + "~";
    Count++;

    //  Begin 2000A Loop 
    HL_InformationSourceLevel_HierarchicalIDNumber_01 = "1";
    HL_InformationSourceLevel_HierarchicalLevelCode_03 = "20";
    HL_InformationSourceLevel_HierarchicalChildCode_04 = "1";
    result = result + "HL*" + HL_InformationSourceLevel_HierarchicalIDNumber_01 + "**" + HL_InformationSourceLevel_HierarchicalLevelCode_03 + "*" + HL_InformationSourceLevel_HierarchicalChildCode_04 + "~";
    Count++;

    //  Begin 2100A Loop
    NM1_PayerName_EntityIdentifierCode_01 = "PR";
    NM1_PayerName_EntityTypeQualifier_02 = "2";
    NM1_PayerName_ResponseContactLastorOrganizationName_03 = payerName //Claimdata.insuranceName;
    NM1_PayerName_IdentificationCodeQualifier_08 = "PI";
    NM1_PayerName_ResponseContactIdentifier_09 = payerId;
    result = result + "NM1*" + NM1_PayerName_EntityIdentifierCode_01 + "*" + NM1_PayerName_EntityTypeQualifier_02 + "*" + NM1_PayerName_ResponseContactLastorOrganizationName_03 + "*****" + NM1_PayerName_IdentificationCodeQualifier_08 + "*" + NM1_PayerName_ResponseContactIdentifier_09 + "~";
    Count++;
    //  End 2100A Loop

    //  Begin 2000B Loop
    HL_InformationReceiverLevel_HierarchicalIDNumber_01 = "2";
    HL_InformationReceiverLevel_HierarchicalParentIDNumber_02 = "1";
    HL_InformationReceiverLevel_HierarchicalLevelCode_03 = "21";
    HL_InformationReceiverLevel_HierarchicalChildCode_04 = "1";
    result = result + "HL*" + HL_InformationReceiverLevel_HierarchicalIDNumber_01 + "*" + HL_InformationReceiverLevel_HierarchicalParentIDNumber_02 + "*" + HL_InformationReceiverLevel_HierarchicalLevelCode_03 + "*" + HL_InformationReceiverLevel_HierarchicalChildCode_04 + "~";
    Count++;

    //  Begin 2100B Loop
    NM1_InformationReceiverName_EntityIdentifierCode_01 = "41";
    NM1_InformationReceiverName_EntityTypeQualifier_02 = "2";
    NM1_InformationReceiverName_ResponseContactLastorOrganizationName_03 = "Cube Medical Billing LLC";
    NM1_InformationReceiverName_IdentificationCodeQualifier_08 = "46";
    NM1_InformationReceiverName_ResponseContactIdentifier_09 = "453052515";
    result = result + "NM1*" + NM1_InformationReceiverName_EntityIdentifierCode_01 + "*" + NM1_InformationReceiverName_EntityTypeQualifier_02 + "*" + NM1_InformationReceiverName_ResponseContactLastorOrganizationName_03 + "*****" + NM1_InformationReceiverName_IdentificationCodeQualifier_08 + "*" + NM1_InformationReceiverName_ResponseContactIdentifier_09 + "~";
    Count++;
    //  End 2100B Loop

    //  Begin 2000C Loop 1
    loop2000C_HL_ServiceProviderLevel_HierarchicalIDNumber_01 = "3";
    loop2000C_HL_ServiceProviderLevel_HierarchicalParentIDNumber_02 = "2";
    loop2000C_HL_ServiceProviderLevel_HierarchicalLevelCode_03 = "19";
    loop2000C_HL_ServiceProviderLevel_HierarchicalChildCode_04 = "1";
    result = result + "HL*" + loop2000C_HL_ServiceProviderLevel_HierarchicalIDNumber_01 + "*" + loop2000C_HL_ServiceProviderLevel_HierarchicalParentIDNumber_02 + "*" + loop2000C_HL_ServiceProviderLevel_HierarchicalLevelCode_03 + "*" + loop2000C_HL_ServiceProviderLevel_HierarchicalChildCode_04 + "~";
    Count++;

    //  Begin 2100C Loop
    loop2100C_NM1_ProviderName_EntityIdentifierCode_01 = "1P";
    loop2100C_NM1_ProviderName_EntityTypeQualifier_02 = "1";
    loop2100C_NM1_ProviderName_ResponseContactLastorOrganizationName_03 = Claimdata.renderingProvLastName;
    loop2100C_NM1_ProviderName_ResponseContactFirstName_04 = Claimdata.renderingProvFirstName;
    loop2100C_NM1_ProviderName_IdentificationCodeQualifier_08 = "XX";
    loop2100C_NM1_ProviderName_ResponseContactIdentifier_09 = Claimdata.rendringProvNPI;
    result = result + "NM1*" + loop2100C_NM1_ProviderName_EntityIdentifierCode_01 + "*" + loop2100C_NM1_ProviderName_EntityTypeQualifier_02 + "*" + loop2100C_NM1_ProviderName_ResponseContactLastorOrganizationName_03 + "*" + loop2100C_NM1_ProviderName_ResponseContactFirstName_04 + "****" + loop2100C_NM1_ProviderName_IdentificationCodeQualifier_08 + "*" + loop2100C_NM1_ProviderName_ResponseContactIdentifier_09 + "~";
    Count++;
    //  End 2100C Loop

    //  Begin 2000D Loop 1
    loop2000D_HL_SubscriberLevel_HierarchicalIDNumber_01 = "4";
    loop2000D_HL_SubscriberLevel_HierarchicalParentIDNumber_02 = "3";
    loop2000D_HL_SubscriberLevel_HierarchicalLevelCode_03 = "22";
    loop2000D_HL_SubscriberLevel_HierarchicalChildCode_04 = "0";
    result = result + "HL*" + loop2000D_HL_SubscriberLevel_HierarchicalIDNumber_01 + "*" + loop2000D_HL_SubscriberLevel_HierarchicalParentIDNumber_02 + "*" + loop2000D_HL_SubscriberLevel_HierarchicalLevelCode_03 + "*" + loop2000D_HL_SubscriberLevel_HierarchicalChildCode_04 + "~";
    Count++;

    loop2000D_DMG_SubscriberDemographicInformation_DateTimePeriodFormatQualifier_01 = "D8";
    loop2000D_DMG_SubscriberDemographicInformation_DependentBirthDate_02 = convertDateToCCYYMMDD(Claimdata.patientDateOfBirth);
    loop2000D_DMG_SubscriberDemographicInformation_DependentGenderCode_03 = Claimdata.patientGender;
    result = result + "DMG*" + loop2000D_DMG_SubscriberDemographicInformation_DateTimePeriodFormatQualifier_01 + "*" + loop2000D_DMG_SubscriberDemographicInformation_DependentBirthDate_02 + "*" + loop2000D_DMG_SubscriberDemographicInformation_DependentGenderCode_03 + "~";
    Count++;

    //  Begin 2100D Loop
    loop2000D1_Loop2100D_NM1_SubscriberName_EntityIdentifierCode_01 = "IL";
    loop2000D1_Loop2100D_NM1_SubscriberName_EntityTypeQualifier_02 = "1";
    loop2000D1_Loop2100D_NM1_SubscriberName_ResponseContactLastorOrganizationName_03 = Claimdata.patientLastName;
    loop2000D1_Loop2100D_NM1_SubscriberName_ResponseContactFirstName_04 = Claimdata.patientFirstName;
    loop2000D1_Loop2100D_NM1_SubscriberName_IdentificationCodeQualifier_08 = "MI";
    loop2000D1_Loop2100D_NM1_SubscriberName_ResponseContactIdentifier_09 = Claimdata.primarypolicynumber;
    result = result + "NM1*" + loop2000D1_Loop2100D_NM1_SubscriberName_EntityIdentifierCode_01 + "*" + loop2000D1_Loop2100D_NM1_SubscriberName_EntityTypeQualifier_02 + "*" + loop2000D1_Loop2100D_NM1_SubscriberName_ResponseContactLastorOrganizationName_03 + "*" + loop2000D1_Loop2100D_NM1_SubscriberName_ResponseContactFirstName_04 + "****" + loop2000D1_Loop2100D_NM1_SubscriberName_IdentificationCodeQualifier_08 + "*" + loop2000D1_Loop2100D_NM1_SubscriberName_ResponseContactIdentifier_09 + "~";
    Count++;
    //  End 2100D Loop

    //  Begin 2200D Loop
    loop2200D_TRN_ClaimStatusTrackingNumber_TraceTypeCode_01 = "1";
    loop2200D_TRN_ClaimStatusTrackingNumber_CurrentTransactionTraceNumber_02 = Claimdata.claimNo;
    result = result + "TRN*" + loop2200D_TRN_ClaimStatusTrackingNumber_TraceTypeCode_01 + "*" + loop2200D_TRN_ClaimStatusTrackingNumber_CurrentTransactionTraceNumber_02 + "~";
    Count++;

    //  Occurrence of REF Segments in any order
    loop2200D_AllREF_REF_PatientControlNumber_ReferenceIdentificationQualifier_01 = "EJ";
    loop2200D_AllREF_REF_PatientControlNumber_MemberGrouporPolicyNumber_02 = Claimdata.claimNo;
    result = result + "REF*" + loop2200D_AllREF_REF_PatientControlNumber_ReferenceIdentificationQualifier_01 + "*" + loop2200D_AllREF_REF_PatientControlNumber_MemberGrouporPolicyNumber_02 + "~";
    Count++;

    loop2200D_AMT_ClaimSubmittedCharges_AmountQualifierCode_01 = "T3";
    loop2200D_AMT_ClaimSubmittedCharges_TotalClaimChargeAmount_02 = Claimdata.totalCharges;
    result = result + "AMT*" + loop2200D_AMT_ClaimSubmittedCharges_AmountQualifierCode_01 + "*" + loop2200D_AMT_ClaimSubmittedCharges_TotalClaimChargeAmount_02 + "~";
    Count++;

    loop2200D_DTP_ClaimServiceDate_DateTimeQualifier_01 = "472";
    loop2200D_DTP_ClaimServiceDate_DateTimePeriodFormatQualifier_02 = "D8";
    loop2200D_DTP_ClaimServiceDate_DateTimePeriod_03 = convertDateToCCYYMMDD(Claimdata.dateofservice);
    result = result + "DTP*" + loop2200D_DTP_ClaimServiceDate_DateTimeQualifier_01 + "*" + loop2200D_DTP_ClaimServiceDate_DateTimePeriodFormatQualifier_02 + "*" + loop2200D_DTP_ClaimServiceDate_DateTimePeriod_03 + "~";
    Count++;
    //  End 2200D Loop

    result = result + "SE*" + Count.toString() + "*" + "28487" + "~";
    result = result + "GE*1*" + "1" + "~";
    result = result + "IEA*1*" + ISA13 + "~";

    return result;

}

function getISAControlNumber() {
    var ISA13 = "";
    var strRandomNumber = "";
    var Rand = parseInt((Math.random() * (9 - 1 + 1)), 10) + 1;
    strRandomNumber = strRandomNumber + Rand;
    var Rand = parseInt((Math.random() * (9 - 1 + 1)), 10) + 1;
    strRandomNumber = strRandomNumber + Rand;
    var Rand = parseInt((Math.random() * (9 - 1 + 1)), 10) + 1;
    strRandomNumber = strRandomNumber + Rand;
    ISA13 = strRandomNumber.trim() + PadRight(getDate(6), 6, " ");
    return ISA13;
}

function convertDateToCCYYMMDD(DOB) {
    var date = new Date(moment.utc(DOB).local().format("YYYY-MM-DD HH:mm"));
    return date.getFullYear().toString().trim() + (((date.getUTCMonth() + 1).toString().trim().length == 1) ? "0" + (date.getUTCMonth() + 1) : "" + (date.getUTCMonth() + 1)) + (((date.getUTCDate()).toString().trim().length == 1) ? "0" + (date.getUTCDate()) : "" + (date.getUTCDate()));
}

function getDTP(DTP01, DTP02, DTP03) {
    var strDTP = "";
    strDTP = "DTP*" + DTP01 + "*" + DTP02 + "*" + DTP03 + "~";
    return strDTP.replace(".", "");
}

function convertDateToCCYYMMDD(DOB) {
    var date = new Date(moment.utc(DOB).local().format("YYYY-MM-DD HH:mm"));
    return date.getFullYear().toString().trim() + (((date.getUTCMonth() + 1).toString().trim().length == 1) ? "0" + (date.getUTCMonth() + 1) : "" + (date.getUTCMonth() + 1)) + (((date.getUTCDate()).toString().trim().length == 1) ? "0" + (date.getUTCDate()) : "" + (date.getUTCDate()));
}

function getDMG(DMG01, DMG02, DMG03) {
    var strDMG = "";
    strDMG = "DMG*" + DMG01 + "*" + DMG02 + "*" + DMG03 + "~";
    return strDMG.replace(".", "");
}

function myGetDate(format) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var yy = today.getFullYear();
    //today = yyyy + '/' + mm + '/' + dd;
    if (format == 6) {
        today = yy.toString().substring(2, 4) + '' + mm + '' + dd;
    } else {
        today = yyyy + '' + mm + '' + dd;
    }
    

    return today;
}

function getDate(format) {
    if (format == 6)
        return (new Date().getFullYear()).toString().substring(2, 4) + (((new Date().getMonth() + 1).toString().trim().length == 1) ? "0" + (new Date().getMonth() + 1).toString().trim() : (new Date().getMonth() + 1).toString().trim()) + (((new Date().getDate() - 1).toString().trim().length == 1) ? "0" + (new Date().getDate() - 1).toString().trim() : (new Date().getDate() - 1).toString().trim());
    else
        return (new Date().getFullYear()).toString() + (((new Date().getMonth() + 1).toString().trim().length == 1) ? "0" + (new Date().getMonth() + 1).toString().trim() : (new Date().getMonth() + 1).toString().trim()) + (((new Date().getDate() - 1).toString().trim().length == 1) ? "0" + (new Date().getDate() - 1).toString().trim() : (new Date().getDate() - 1).toString().trim());
}

function getTime() {
    return "" + ((new Date().getHours().toString().trim().length == 1) ? "0" + new Date().getHours().toString().trim() : new Date().getHours().toString().trim()) + ((new Date().getMinutes().toString().trim().length == 1) ? "0" + new Date().getMinutes().toString().trim() : new Date().getMinutes().toString().trim());

}

function PadRight(value, length, char) {
    var valueLength = value.length;
    if (length <= valueLength)
        return value;
    for (var i = valueLength + 1; i <= length; i++) {
        value += char;
    }
    return value;
}
