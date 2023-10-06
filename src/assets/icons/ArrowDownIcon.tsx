import { SvgIcon, SvgIconProps } from '@mui/material'

const ArrowDownIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon role="img" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.96967 8.46967C6.26256 8.17678 6.73744 8.17678 7.03033 8.46967L12.5 13.9393L17.9697 8.46967C18.2626 8.17678 18.7374 8.17678 19.0303 8.46967C19.3232 8.76256 19.3232 9.23744 19.0303 9.53033L13.0303 15.5303C12.7374 15.8232 12.2626 15.8232 11.9697 15.5303L5.96967 9.53033C5.67678 9.23744 5.67678 8.76256 5.96967 8.46967Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}

export default ArrowDownIcon
