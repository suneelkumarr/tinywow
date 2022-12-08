var express = require('express');
var router = express.Router()
// router.get('/', (req, res) => {
//     // res.render('pages/pdf/edit', {
//     //     title: "PDF"
//     // })
//     res.redirect('http://localhost:3000/pages/pdf/edit')
// })

router.get('/edit', (req, res) => {
    res.render('pages/pdf/edit', {
        title: "PDF"
    })
})
//pdf ro word
router.get('/to-word', (req, res) => {
    res.render('pages/pdf/to-word', {
        title: "PDF"
    })
})

//word to Pdf
router.get('/from-word', (req, res) => {
    res.render('pages/pdf/from-word', {
        title: "PDF"
    })
})

//JPG to PDF
router.get('/from-jpg', (req, res) => {
    res.render('pages/pdf/from-jpg', {
        title: "PDF"
    })
})
//PDF to JPG
router.get('/to-jpg', (req, res) => {
    res.render('pages/pdf/to-jpg', {
        title: "PDF"
    })
})
//Merge PDF
router.get('/merge', (req, res) => {
    res.render('pages/pdf/merge', {
        title: "PDF"
    })
})
//Compress PDF
router.get('/compress', (req, res) => {
    res.render('pages/pdf/compress', {
        title: "PDF"
    })
})
//Split PDF
router.get('/split', (req, res) => {
    res.render('pages/pdf/split', {
        title: "PDF"
    })
})
//Unlock PDF
router.get('/unlock', (req, res) => {
    res.render('pages/pdf/unlock', {
        title: "PDF"
    })
})

//PDF to Excel
router.get('/to-xlsx', (req, res) => {
    res.render('pages/pdf/to-xlsx', {
        title: "PDF"
    })
})
//PDF to Powerpoint
router.get('/to-ppt', (req, res) => {
    res.render('pages/pdf/to-ppt', {
        title: "PDF"
    })
})
//PNG to PDF
router.get('/from-png', (req, res) => {
    res.render('pages/pdf/from-png', {
        title: "PDF"
    })
})

//Powerpoint to PDF
router.get('/from-ppt', (req, res) => {
    res.render('pages/pdf/from-ppt', {
        title: "PDF"
    })
})

//Extract images PDF
router.get('/extract-img', (req, res) => {
    res.render('pages/pdf/extract-img', {
        title: "PDF"
    })
})

//URL to PDF
router.get('/from-url', (req, res) => {
    res.render('pages/pdf/from-url', {
        title: "PDF"
    })
})
//PDF Page Deleter
router.get('/delete', (req, res) => {
    res.render('pages/pdf/delete', {
        title: "PDF"
    })
})

//EPUB to PDF
router.get('/from-epub', (req, res) => {
    res.render('pages/pdf/from-epub', {
        title: "PDF"
    })
})

//Rotate PDF
router.get('/rotate', (req, res) => {
    res.render('pages/pdf/rotate', {
        title: "PDF"
    })
})

//Create PDF
router.get('/create', (req, res) => {
    res.render('pages/pdf/create', {
        title: "PDF"
    })
})

//PDF to PNG
router.get('/to-png', (req, res) => {
    res.render('pages/pdf/to-png', {
        title: "PDF"
    })
})
//eSign PDF
router.get('/sign', (req, res) => {
    res.render('pages/pdf/sign', {
        title: "PDF"
    })
})
//Protect PDF
router.get('/protect', (req, res) => {
    res.render('pages/pdf/protect', {
        title: "PDF"
    })
})

//Rearrange PDF
router.get('/rearrange', (req, res) => {
    res.render('pages/pdf/rearrange', {
        title: "PDF"
    })
})

//Crop PDF
router.get('/crop', (req, res) => {
    res.render('pages/pdf/crop', {
        title: "PDF"
    })
})

//PDF to EPUB
router.get('/to-epub', (req, res) => {
    res.render('pages/pdf/to-epub', {
        title: "PDF"
    })
})

//PDF to CSV
router.get('/to-csv', (req, res) => {
    res.render('pages/pdf/to-csv', {
        title: "PDF"
    })
})

//Add Numbers to PDF
router.get('/add-pages', (req, res) => {
    res.render('pages/pdf/add-pages', {
        title: "PDF"
    })
})

//Annotate PDF
router.get('/annotate', (req, res) => {
    res.render('pages/pdf/annotate', {
        title: "PDF"
    })
})
//PDF to MOBI
router.get('/to-mobi', (req, res) => {
    res.render('pages/pdf/to-mobi', {
        title: "PDF"
    })
})

//PDF to Text
router.get('/to-text', (req, res) => {
    res.render('pages/pdf/to-text', {
        title: "PDF"
    })
})
//HEIC to PDF
router.get('/from-heic', (req, res) => {
    res.render('pages/pdf/from-heic', {
        title: "PDF"
    })
})

//IMAGES to PDF
router.get('/add-images', (req, res) => {
    res.render('pages/pdf/add-images', {
        title: "PDF"
    })
})
//Extract text from PDF
router.get('/extract-text', (req, res) => {
    res.render('pages/pdf/extract-text', {
        title: "PDF"
    })
})
//PDF to TIFF
router.get('/to-tiff', (req, res) => {
    res.render('pages/pdf/to-tiff', {
        title: "PDF"
    })
})

//MOBI to PDF
router.get('/from-mobi', (req, res) => {
    res.render('pages/pdf/from-mobi', {
        title: "PDF"
    })
})

//TIFF to PDF
router.get('/from-tiff', (req, res) => {
    res.render('pages/pdf/from-tiff', {
        title: "PDF"
    })
})

//Add Watermark
router.get('/watermark', (req, res) => {
    res.render('pages/pdf/watermark', {
        title: "PDF"
    })
})

//GIF to PDF
router.get('/from-gif', (req, res) => {
    res.render('pages/pdf/from-gif', {
        title: "PDF"
    })
})

// PDF to AZW3
router.get('/to-azw3', (req, res) => {
    res.render('pages/pdf/to-azw3', {
        title: "PDF"
    })
})

//AZW3 to PDF
router.get('/from-azw3', (req, res) => {
    res.render('pages/pdf/from-azw3', {
        title: "PDF"
    })
})

//WEBP to PDF
router.get('/from-webp', (req, res) => {
    res.render('pages/pdf/from-webp', {
        title: "PDF"
    })
})

//EPS to PDF
router.get('/from-eps', (req, res) => {
    res.render('pages/pdf/from-eps', {
        title: "PDF"
    })
})

module.exports = router