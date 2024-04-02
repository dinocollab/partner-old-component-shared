import { Dictionary } from '@reduxjs/toolkit'
import { RoleKeyExternalSite, RoleKeyInternalSite } from '../Helper/RoleKey'

export type UserInputType = 'Create' | 'Edit' | 'Profile'
export interface IUserInputProfile {
  Type: UserInputType
  user?: IUser
  DirectWhenClose?: string
}
export interface IUser {
  Id: string
  FirstName: string
  LastName: string
  UserName: string
  Email: string
  Avatar: string
  LockoutEnabled: boolean
  LockoutEnd: string | null
  DateCreated: string
  IsLock: boolean
  PhoneNumber: string
  SigningDate: string
  PersonAddress: string
  PersonIdentityCard: string
  DisplayName: string
  //business info
  CompanyName: string
  Position: string
  BusinessAddress: string
  //payment info
  BeneficiaryName: string
  AccountNumber: string
  BankName: string
  IdentityCard: string
  SwiftNumber: string
  BankAddress: string
  AutoPassword?: string
  Roles: string[]
  UserCreatorId: string
  DisplayCreator: string
  EmailCreator: string
  UserNameCreator: string
  //contact
  ContactInfoMap: { [key: string]: IContactInfo }
  Tags: string
}

export interface IChangePassword {
  Id: string
  CurrentPassword: string
  NewPassword: string
  ConfirmPassword: string
}

export interface IAccountPermission {
  Id: string
  Roles: (RoleKeyInternalSite | RoleKeyExternalSite) | (RoleKeyInternalSite | RoleKeyExternalSite)[]
}
export interface EntityTimeBase {
  DateCreated: string
  DateUpdated: string
}
export interface IUserCreator {
  UserCreatorId: string
}
export interface IAccountBank {
  Id: string
  BeneficiaryName: string
  AccountNumber: string
  BankName: string
  IdentityCard: string
  SwiftNumber: string
  BankAddress: string
  UserId: string
}
export interface IReportPayment {
  Name: string
  TransactionId: string
  ReportId: string
  Description: string
  Payout: number
  USDRate: number
}
export interface ISelectModel {
  Id: string
  Name: string
  UserId: string
}
export interface IVideoPrice {
  Id: string
  Summary: string
  Price: number
  UserId: string
  Actions?: string
}
export interface IMediaChannel {
  Id: string
  Platform: string
  Name: string
  Summary: string
  Link: string
  UserId: string
  Actions?: string
}
export interface IExtendMediaChannel extends IMediaChannel {
  Email: string
  Manage: string
}
export interface IContactInfo {
  Id: string
  Platform: string
  Name: string
  Link: string
  UserId: string
}

export interface IAsset {
  Kind: string
  Id: string
  Type: string
  Title: string
  CustomId: string
  MediaId?: string
  MediaName?: string
  TimeCreated: string
  LabelName: string
}
export interface IAssetLabel {
  Name: string
  UserId: string
  Email: string
  AmountAssets: number
}

export interface INamingFolder {
  FolderName: string
  FolderId: string
  UserIds: string[] | string
  Users: string
  FileAmount: number
}

export interface INamingFolderExtend extends INamingFolder {
  Actions?: string
}

export enum MediaNetworkStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}
export interface IMediaNetwork extends EntityTimeBase {
  Id: string
  Name: string
  Status: MediaNetworkStatus
  OwnerId: string
  AccountJson: string
  Description: string
  Types: EChannelType[]
}
export interface IMediaNetworkInfo {
  Data: IMediaNetwork[]
  Types: EChannelType[]
}

export enum JoinNetworkStatus {
  Pending = 'Pending',
  Inviting = 'Inviting',
  Joined = 'Joined',
  Rejected = 'Rejected',
}

export interface IChannelNetwork extends EntityTimeBase {
  Id: string
  ChannelId: string
  Name: string
  UserId: string
  DisplayName: string
  Email: string
  UserEmail: string
  // Network: string;
  // Status: ChannelNetworkStatus;
  // NetworkId: string;
  // Percentage: number
}
export enum WhitelistStatus {
  Pending = 'Pending',
  Accepted = 'Accepted',
  Rejected = 'Rejected',
}
export interface IWhitelist extends EntityTimeBase {
  Id: string
  ChannelId: string
  ChannelName: string
  AcceptedDate: string
  Status: WhitelistStatus
  NetworkId: string
  UserId: string
  DisplayName: string
}
export interface IItemSummary {
  Folder: number
  File: number
  Audio: number
  Image: number
  Video: number
  Asset: number
  AssetLabel: number
  ChannelContent: number
}

export interface ITotalEarning {
  [key: string]: number
}
export interface IBillingSummary {
  Title: string
  Total: number
  Details: number[]
}
export interface IEarningCardDTO {
  Asset: number
  Channel: number
  AssetDate?: string
  ChannelDate?: string
}
export interface ISummaryChart {
  ChartData: { [key: string]: IBillingSummary }
  EarningCards: { [key: string]: IEarningCardDTO }
}
export interface IUserReport {
  UserId: string
  DisplayName: string
  Email: string
  Manager: string
  Monthly: string
  Video: number
  Audio: number
  Content: number
  Claimed: number
  Values: Dictionary<number>
}
export interface IFile {
  Id: string
  Extension: string
  Name: string
  DriveFileId: string
  DisplayName: string
  FolderName: string
  DateCreated: string
  Email: string
}
export enum EnumChannelType {
  Content = 'Content',
  Claimed = 'Claimed',
}

export type EChannelType = 'Content' | 'Claimed' | EnumChannelType

export interface IJoinNetwork extends EntityTimeBase {
  Id: string
  ChannelId: string
  ChannelNetworkId: string
  ChannelName: string
  UserId: string
  DisplayName: string
  Network: string
  Status: JoinNetworkStatus
  Type: EChannelType
  NetworkId: string
  Percentage: number
  Email: string
  ManagerId: string
  ManagerEmail: string
  ManagerName: string
  ContractId?: string
  ContractName?: string
  ContractOptionId?: string
  ContractOptionName?: string
  ContractOptionDescription?: string
}

export enum ReportStatus {
  Unpaid = 'Unpaid',
  Paid = 'Paid',
}

export enum ResourceType {
  AudioLabel = 'AudioLabel',
  AssetLabel = 'AssetLabel',
  ClaimedChannel = 'ClaimedChannel',
  ContentChannel = 'ContentChannel',
}
const temp1 = { ...ResourceType }
if ('AudioLabel' in temp1 || 'AssetLabel' in temp1) {
  delete (temp1 as any).AssetLabel
  delete (temp1 as any).AudioLabel
}
export const ChannelResourceType = temp1
const temp2 = { ...ResourceType }
if ('ClaimedChannel' in temp2 || 'ContentChannel' in temp2) {
  delete (temp2 as any).ClaimedChannel
  delete (temp2 as any).ContentChannel
}
export const AssetResourceType = temp2

export interface IReport extends EntityTimeBase {
  Id: string
  Name: string
  Status: ReportStatus
  StartTime: string
  EndTime: string
  ResourceType: ResourceType
  Description: string
  Payout: number
  NoDetails: boolean
  ResourceId: string
  ResourceName: string
  TransactionId: string
  UserId: string
  DisplayName: string
  Email: string
  DatePaid: string
  ExchangeRate?: number
}
export interface IChannelResourceInfo {
  Name: string
  ChannelId: string
}
export interface IReportView extends EntityTimeBase {
  Id: string
  ResourceId: string
  ResourceInfo: string
  TotalMoney: number
  Payout: number
  Views: number
  ReportId: string
  CustomId?: string
  EChannelType: EChannelType
  Percentage: number
}
export interface IChannelReportView extends IReportView {
  ChannelName?: string
  Percentage: number
}
export interface IAssetReportView extends IReportView {
  Percentage: number
}
export enum EClaimRepository {
  Active = 'Active',
  InActive = 'InActive',
}
export interface IClaimRepository extends EntityTimeBase {
  Id: string
  Name: string
  Description?: string
  RepositoryUri: string
  Status: EClaimRepository
}
export interface IClaimRepositoryData {
  RepositoryIds: string
  UserIds: string
}
export interface IClaimRepositoryRequest {
  RepositoryId: string
  UserId: string
}
export type IClaimRepositoryAllocateRequest = IClaimRepositoryRequest[]
export interface IClaimRepositoryAllocateSearchRequest {
  RepositoryId: string
  UserId: string
}
export interface IClaimRepositoryAllocate {
  RepositoryId: string
  UserId: string
  Email: string
  DisplayName: string
  RepositoryName: string
}
export interface ISyncChannelGroupRequest {
  NetworkId: string
  UserId: string
}
export interface ISyncChannelGroupModel extends ISyncChannelGroupRequest {
  AddChannelIds: ISyncChannelGroup[]
  DeleteChannelIds: ISyncChannelGroup[]
}
export interface ISyncChannelGroup {
  Id: string
  ChannelId: string
  ChannelName: string
  Type: string
}
export interface IAddChannelToGroup {
  DateCreated: string
  DateUpdated: string
  Id: string
  GroupId: string
  ChannelId: string
  Status: string
  ChannelGroup: IChannelGroup
}
export interface IChannelGroup {
  Id: string
  Name: string
  Type: string
  UserId: string
  User: IUser
  NetworkId: string
  MediaNetwork: IMediaNetwork
}
export interface IAudioLabel {
  Name: string // => id
  DateCreated: string
  DateUpdated: string
  Description: string
  ImageUrl: string
  UserId: string
  Email: string
  DisplayName: string
}
export interface IMediaAsset {
  Id: string
  Name: string
  Description?: string
  Length: number
  Extension: string
  Bitrate: number
  SourceId: string
  OriginalName: string
  AuthorName?: any
  LabelName?: any
  DeliveryId: string
  DateCreated: string
  DateUpdated: string
}
export interface IMediaAuthor {
  Name: string // => id
  DateCreated: string
  DateUpdated: string
  Description: string
  ImageUrl: string
  UserId?: string
  Email: string
  DisplayName: string
}
export interface IMediaDeliveryStatus {
  Id: string
  Pending: number
  Release: number
  Reject: number
  Error: number
}
export interface IMediaDelivery {
  Id: string
  Count: number
  Description?: string
  Name: string
  DriveFolderId: string
  UploadType: EUploadType
  DateCreated: string
  DateUpdated: string
  UserId: string
  Email: string
  DisplayName: string
}
export interface ITagAudioMetaData {
  BitsPerSample: number
  SampleRate: number
  Duration: number
  Bitrate: number
  Length: number
}
export interface ITagImageMetaData {
  PhotoWidth: number
  PhotoHeight: number
  Length: number
}
export interface ITagLicenseMetaData {
  Length: number
}
export interface IMediaValidate {
  MetaData?: File
  AlbumImages: File[]
  Audios: File[]
  Licenses: File[]
  type?: EUploadType
}
export interface IMediaValidateRequest {
  MetaData?: File
  AlbumImages: {
    Tag: ITagImageMetaData
    File: File
  }[]
  Audios: {
    Tag: ITagAudioMetaData
    File: File
  }[]
  Licenses: {
    Tag: ITagLicenseMetaData
    File: File
  }[]
  type?: EUploadType
}

export interface IAudioSessionCheck {
  Items: { Description?: any; UserId: string; Count: number; UploadType: EUploadType }[]
  Token: string
}
export interface ILicenses {
  Name: string
  SourceId?: string
}
export interface IInputValidate {
  Data: IAudioMeta[]
  Token: string
}
export enum EStepType {
  Upload = 'Upload',
  AlbumDetail = 'AlbumDetail',
  Preview = 'Preview',
  Complete = 'Complete',
}
export enum ExplicitContentType {
  NotExplicit = 'NotExplicit',
  Explicit = 'Explicit',
  CleanedVersion = 'CleanedVersion',
}
export type EAlbumStatus = 'Pending' | 'Release' | 'Error' | 'Reject'

export enum EMatchPolicy {
  Monetizein = 'Monetizein in all countries',
  Block = 'Block in all countries',
  Trackin = 'Trackin in all countries',
}
export type TMatchPolicy = EMatchPolicy.Monetizein | EMatchPolicy.Block | EMatchPolicy.Trackin
export interface IAlbumDetail {
  Id: string
  Title: string
  Language: string
  PrimaryArtist: string
  OtherArtists?: string
  LabelName: string
  Status: EAlbumStatus
  Note?: string
  ImageSourceId?: string
}

export interface IAlbumDetailFull extends IAlbumDetail {
  ImageFileName: string
  AlbumVersion?: string
  PrimaryGenre: string
  SecondaryGenre: string
  CompositionCopyright: string
  SoundRecordingCopyright: string
  OriginallyReleased: string
  Explicit: string
  HasCompilationAlbum: boolean
  Composers: string
  HasLyricist: boolean
  Lyricists: string
  UPC?: string
  OwnershipTerritory?: string
  MatchPolicy?: TMatchPolicy
  MetaDataId?: string
  DeliveryId: string
  AuthorName?: string
  DateCreated: string
  DateUpdated: string
}

interface IGroups {
  AlbumDetail: IAlbumDetailFull
  AudioMetas: IAudioMeta[]
  AlbumImageId?: string
  RootFolderId: string
  AudioFolderId: string
  LicenseFolderId: string
}
export interface IAudioSessionGet {
  Token: string
  Type: EStepType
  TimStamp: string
  TempFolderId: string
  MediaDelivery: {
    Count: number
    Description?: string
    Name: string
    UploadType: EUploadType
    UserId: string
  }
  Groups: IGroups[]
  Licenses: ILicenses[]
}

export interface IAudioMeta {
  AlbumId: string
  SourceId: string
  HasFile: boolean
  Composers?: string
  HasLyricist: boolean
  Lyricists?: string
  Language?: string
  Length: number
  Extension?: string
  Bitrate: number
  SampleRate: number
  BitsPerSample: number
  Duration: number
  TrackNumber: number
  FileName: string
  Title: string
  PrimaryArtist?: string
  OtherArtists?: string
  Genre?: string
  AlbumTitle: string
  AlbumImage?: string
  AlbumReleaseDate: string
  OwnershipTerritory?: string
  MatchPolicy?: string
  LabelName?: string
}

export enum EExportType {
  ATYoutube = 'ATYoutube',
  SRYoutube = 'SRYoutube',
}
export enum EUploadType {
  MetaData = 'MetaData',
  NoMetaData = 'NoMetaData',
}
export interface IAudioExport {
  Type: string
  DeliveryId: string
}
export interface IAudioInfo {
  Genre: string
  AlbumTitle: string
  AlbumImage: string
  AlbumReleaseDate: string
  OwnershipTerritory: string
  MatchPolicy: string
  LabelName: string
  TrackNumber: number
  FileName: string
  Title: string
  PrimaryArtist: string
  OtherArtists: string
  SourceId: string
}
