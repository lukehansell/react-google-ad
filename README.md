# Google Ad React Component

## Installation
```
npm i --save react-google-ad
```

Then in your HTML include:

```
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
```

## Usage

```
import GoogleAd from 'react-google-ad'
<GoogleAd client="xxx" slot="xxx" format="xxx" />
```

### Arguments
- **client:** the data-ad-client provided by Google
- **slot:** the data-ad-slot provided by Google
- **format:** the data-ad-format provided by Google