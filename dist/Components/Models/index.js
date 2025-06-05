import { objectSpread2 as _objectSpread2 } from '../../_virtual/_rollupPluginBabelHelpers.js';

var MediaNetworkStatus;
(function (MediaNetworkStatus) {
  MediaNetworkStatus["Active"] = "Active";
  MediaNetworkStatus["Inactive"] = "Inactive";
})(MediaNetworkStatus || (MediaNetworkStatus = {}));
var JoinNetworkStatus;
(function (JoinNetworkStatus) {
  JoinNetworkStatus["Pending"] = "Pending";
  JoinNetworkStatus["Inviting"] = "Inviting";
  JoinNetworkStatus["Joined"] = "Joined";
  JoinNetworkStatus["Rejected"] = "Rejected";
})(JoinNetworkStatus || (JoinNetworkStatus = {}));
var WhitelistStatus;
(function (WhitelistStatus) {
  WhitelistStatus["Pending"] = "Pending";
  WhitelistStatus["Accepted"] = "Accepted";
  WhitelistStatus["Rejected"] = "Rejected";
})(WhitelistStatus || (WhitelistStatus = {}));
var EnumChannelType;
(function (EnumChannelType) {
  EnumChannelType["Content"] = "Content";
  EnumChannelType["Claimed"] = "Claimed";
})(EnumChannelType || (EnumChannelType = {}));
var ReportStatus;
(function (ReportStatus) {
  ReportStatus["Unpaid"] = "Unpaid";
  ReportStatus["Paid"] = "Paid";
})(ReportStatus || (ReportStatus = {}));
var ResourceType;
(function (ResourceType) {
  ResourceType["AudioLabel"] = "AudioLabel";
  ResourceType["AssetLabel"] = "AssetLabel";
  ResourceType["ClaimedChannel"] = "ClaimedChannel";
  ResourceType["ContentChannel"] = "ContentChannel";
  ResourceType["TrackMusic"] = "TrackMusic";
})(ResourceType || (ResourceType = {}));
var temp1 = _objectSpread2({}, ResourceType);
if ('AudioLabel' in temp1 || 'AssetLabel' in temp1) {
  delete temp1.AssetLabel;
  delete temp1.AudioLabel;
}
var ChannelResourceType = temp1;
var temp2 = _objectSpread2({}, ResourceType);
if ('ClaimedChannel' in temp2 || 'ContentChannel' in temp2) {
  delete temp2.ClaimedChannel;
  delete temp2.ContentChannel;
}
var AssetResourceType = temp2;
var EClaimRepository;
(function (EClaimRepository) {
  EClaimRepository["Active"] = "Active";
  EClaimRepository["InActive"] = "InActive";
})(EClaimRepository || (EClaimRepository = {}));
var EStepType;
(function (EStepType) {
  EStepType["Upload"] = "Upload";
  EStepType["AlbumDetail"] = "AlbumDetail";
  EStepType["Preview"] = "Preview";
  EStepType["Complete"] = "Complete";
})(EStepType || (EStepType = {}));
var ExplicitContentType;
(function (ExplicitContentType) {
  ExplicitContentType["NotExplicit"] = "NotExplicit";
  ExplicitContentType["Explicit"] = "Explicit";
  ExplicitContentType["CleanedVersion"] = "CleanedVersion";
})(ExplicitContentType || (ExplicitContentType = {}));
var EMatchPolicy;
(function (EMatchPolicy) {
  EMatchPolicy["Monetizein"] = "Monetizein in all countries";
  EMatchPolicy["Block"] = "Block in all countries";
  EMatchPolicy["Trackin"] = "Trackin in all countries";
})(EMatchPolicy || (EMatchPolicy = {}));
var EExportType;
(function (EExportType) {
  EExportType["ATYoutube"] = "ATYoutube";
  EExportType["SRYoutube"] = "SRYoutube";
})(EExportType || (EExportType = {}));
var EUploadType;
(function (EUploadType) {
  EUploadType["MetaData"] = "MetaData";
  EUploadType["NoMetaData"] = "NoMetaData";
})(EUploadType || (EUploadType = {}));

export { AssetResourceType, ChannelResourceType, EClaimRepository, EExportType, EMatchPolicy, EStepType, EUploadType, EnumChannelType, ExplicitContentType, JoinNetworkStatus, MediaNetworkStatus, ReportStatus, ResourceType, WhitelistStatus };
//# sourceMappingURL=index.js.map
