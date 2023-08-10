import { IconCopy } from '../Icons/IconCopySvg'

export const CopyButton = () => {
  return (
    <button
      onClick={() => navigator.clipboard.writeText('clecio.dev3@gmail.com')}
    >
      <IconCopy />
    </button>
  )
}
