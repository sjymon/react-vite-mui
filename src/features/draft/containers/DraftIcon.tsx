import * as Icon from '@assets/icons'
import { createElement, useMemo } from 'react'
import DraftBox from '../components/DraftBox'
const DraftIcon = () => {
  const iconMap = useMemo(() => {
    return Object.entries(Icon).map((item) => ({
      tag: item[0],
      demo: createElement(item[1]),
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Icon])
  return (
    <div className="draft-page draft-button">
      <h2>App Icon components ({iconMap.length})</h2>
      <div className="draft-box__wrapper">
        {iconMap
          .sort((a: any, b: any) =>
            a.tag > b.tag ? 1 : b.tag > a.tag ? -1 : 0,
          )
          .map((i, x) => (
            <DraftBox key={x} demo={i.demo} tag={i.tag} />
          ))}
      </div>
    </div>
  )
}

export default DraftIcon
