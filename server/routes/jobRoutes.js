const express = require("express");
const router = express.Router()
const auth = require("../middleware/auth")
const jobController = require("../controllers/jobController")

router.get("/dashboard",auth, jobController.dashboard )
router.post('/jobs/create', auth, jobController.createJob)
router.delete('/jobs/:id', auth, jobController.deleteJob)
router.get('/jobs/:id', auth, jobController.getJob)
router.get('/candidates', auth, jobController.getCandidates )
router.post("/candidates/:id", auth, jobController.createCandidate)
router.put("/candidates/:jobId/:candidateId", auth, jobController.updateCandidate)
router.delete("/candidates/:jobId/:candidateId", auth, jobController.deleteCandidate)
router.post('/create/:id', auth, jobController.createDetails)

module.exports = router