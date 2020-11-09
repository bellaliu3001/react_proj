import { createGlobalStyle } from 'styled-components'

const IconFontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1604754320694'); /* IE9 */
    src: url('./iconfont.eot?t=1604754320694#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAP8AAsAAAAACBQAAAOwAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDUIMmATYCJAMQCwoABCAFhG0HRxsXB1GUzM0e2Udi7DwKjSCobI1z3sbDf/u1++bPLrPraJIkGi366SRONynRE4RKokRCgZDongiJq9/0F6hQqAvPjNTUSHKkxMiQeyb+JyL+x73T/3eC81mWy1iT1qY6j7oAowkU0NiLrIACxJgbxq68iPUEmib1ROxkF1YCLTO6BeJS0glAp8xyTWYoQr1kbIZ4BFsljSdfATz4n49fCA8aJLUKjL67x1laSP3wfE5Tw/4P0+giIBnPCTaJCktAJk5L3fuoMLaE0lS+Y2MVKIrEx8iz6Of0//9Quhd1Mf/yCElF1MFIb4NlpKpOTGLzCD5WeSQ+i8ZN4llbYOIewBsmxx+VZGnMkaa9WN6hv7g/fZ24dq36ypXKq1erJl5PQbMnrh4+4Pr1mqSw4C7Xrrkw1Y6VjIGtq58TzCzyrRV2sxMBmGAOMBPOEcNraob7gxOrtqyAYSvZiYcJwlBVvaPQRhLRPXVX9Fx01auyZvb1hKUqz7g5Agox43DKfpevp8x50DZhWcDtz122fEhotXd2buoqp5AzDx+eSZkCV+jMO+PwkZlkiqXbVWfn+f4R/lFmefiNGrV+/SigoKCLvCJjoSeAvwwOHOdc7Jp5ETn/V2dc0yeXVJHpain5us3vZCs+GqsibNN4uVu15NTEFqTGP2muwaf9vH77d/rYKRjePrnVdy16a+s3Os7UrA2amYT7DO6wOWfc+hl84fq6nnWtGRv2OMV32/4wVTX74FjiOebAm/7Eosj0onoYMNfSrE6TqE4PH7uXU2fUniNnBIfdAgvA/0HqAJXmo/9RQM9rY39rO/40J1tcEr/S7HUVvb/umYa8/wdtoJ/k30haS36ipGVOVmWGJWdZbos1T7aW6CahqYlfl2LIvTG0o63TCcVoDMmACagUU2gml6CmZRnqinVoWpQzuWWYghLZAVgwGkDoWw9J1wtU+s6imbwLNWPeQl0/KGjaC485W2ZCYjIUJGCk5dT9OUkjm0XLhpkgsxzpehsFJSnzmdVIsUpBLowPzSZzkBkpYwyw9tGFYyxyoiKbuGywGTIaZc6iyHqkwXwbxpZ4lUosexGvkU3A2KZABBiixVHrjyPRkJmJbmGMyb2/HKLTm5FAqcmq8FdDFFZS7ZwwvNAWaI7a3CrrWi6x6kMnHIaJOCKFzISTDZyI0YzJOJbyVnqIBsZr6xGxiKdC+cS2an5+rekJV0GTMU8OkqAIG8IWmseCWacV9JI7nEwT2FJktvbvbRJktQQA') format('woff2'),
    url('./iconfont.woff?t=1604754320694') format('woff'),
    url('./iconfont.ttf?t=1604754320694') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1604754320694#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default IconFontStyle;