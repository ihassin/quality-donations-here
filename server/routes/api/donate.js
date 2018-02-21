const router = require("express").Router();
const donationController = require("../../controllers/donationController");
const path = require("path");


// Matches with "/api/shop"
// router.route("/shop")
//   .get(donationController.findAll);


// router.get('/', (req, res, next) => {
// 	console.log('===== user!!======')
// 	console.log(req.user)
// 	if (req.user) {
// 		return res.json({ user: req.user })
// 	} else {
// 		return res.json({ user: null })
// 	}
// })


router.get('/shop', (req, res, next) => {
	donationController.findAll(req, res);
})

router.get("/uploads/:user/:imageName", (req, res) =>{
	res.sendFile(path.join(__dirname, `../../uploads/${req.params.user}/${req.params.imageName}`));
})



// // Matches with "/api/donations"
// router.route("/")
//   .get(donationController.findAll)
//   .post(donationController.create);

// // Matches with "/api/donations/:id"
// router
//   .route("/:id")
//   .get(donationController.findById)
//   .put(donationController.update)
//   .delete(donationController.remove);

// // Matches with "/api/donations/:donorId
// router.route("/:donorId")
//   .get(donationController.findAll)

// // Matches with "/api/donations/:doneeId
// router.route("/:doneeId")
//   .get(donationController.findAll)

// // ???????????????????????????????????????????????????????
// // Matches with "/api/donations/  Like/categoryTab/conditionTag/ageTag/location
// router.route("/:")
//   .get(donationController.findAll)

module.exports = router;
