import mHeader from '@/components/mHeader/index'
import mFooter from '@/components/mFooter/index'
import mBackToTop from '@/components/mBackToTop/index'
import mBanner from '@/components/mBanner/index'

const install = function (Vue) {
  if (install.installed) return
  Vue.component(mHeader.name, mHeader)
  Vue.component(mFooter.name, mFooter)
  Vue.component(mBackToTop.name, mBackToTop)
  Vue.component(mBanner.name, mBanner)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
