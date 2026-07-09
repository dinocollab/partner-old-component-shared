export interface IFormOTPOptions {
  /** Count of OTP digits. @default 6 */
  length?: number
  /** Countdown time in seconds. @default 60 */
  countdownTime?: number
  /** Callback when OTP is complete */
  onComplete?: (otp: string) => Promise<void> | void
  /** Callback when OTP form is closed */
  onClose?: () => void
  /** Callback to resend OTP */
  onResend?: () => Promise<void> | void
}

export interface IFormOTPActions {
  /** Open the OTP form */
  open: (options?: IFormOTPOptions) => void
  /** Close the OTP form */
  close: () => void
}

export interface IFormOTPContext {
  api?: IFormOTPActions
}
