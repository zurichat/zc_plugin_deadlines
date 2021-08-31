/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

import { Router } from 'express'
import userController from '@controllers/user.controller'

const router = Router()

router.get('/user', userController.create)

export default router
