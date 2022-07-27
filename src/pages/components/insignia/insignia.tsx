import { View, Image } from '@tarojs/components'
import githubPng from "@/assets/iconpark/github.png"
import rnPng from "@/assets/common/rn.png"
import h5Png from "@/assets/common/h5.png"
import weappPng from "@/assets/common/wapp.png"
import { isRN, loadWeb } from "@/utils/index";
import './insignia.scss'

interface InsigniaProps {
  github: string
  rn?: boolean
  h5?: boolean
  weapp?: boolean
  title?: string
}

export default function Insignia({github, title='Github', rn=true, h5=true, weapp=true}:InsigniaProps) {
  return <View className='insignia-container'>
    <Image src={githubPng} className="insignia-img"
      onClick={()=> {
        loadWeb({
          url: github,
          title,
          certified: isRN,
        })
      }}
    />
    <View className='insignia-sep'>&nbsp;</View>
    {rn && <Image src={rnPng} className="insignia-img" />}
    {h5 && <Image src={h5Png} className="insignia-img" />}
    {weapp && <Image src={weappPng} className="insignia-img" />}
  </View>
}
