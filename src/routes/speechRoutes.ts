
import {Router} from 'express'
import { SpeechController } from '../controllers/SpeechController'


// initialize Controller 
const speechController = new SpeechController();


//initialize router
const router = Router()

router.post("/speech", speechController.textSpeech)






export default router