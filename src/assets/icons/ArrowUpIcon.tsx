import { SvgIcon, SvgIconProps } from '@mui/material'

const ArrowUpIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9697 8.46967C12.2626 8.17678 12.7374 8.17678 13.0303 8.46967L19.0303 14.4697C19.3232 14.7626 19.3232 15.2374 19.0303 15.5303C18.7374 15.8232 18.2626 15.8232 17.9697 15.5303L12.5 10.0607L7.03033 15.5303C6.73744 15.8232 6.26256 15.8232 5.96967 15.5303C5.67678 15.2374 5.67678 14.7626 5.96967 14.4697L11.9697 8.46967Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}

export default ArrowUpIcon
