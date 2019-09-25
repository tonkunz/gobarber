import { startOfDay, endOfDay, parseISO } from 'date-fns'
import { Op } from 'sequelize' // Sequelize BD Operators

import Appointment from '../models/Appointment'
import User from '../models/User'

class ScheduleController {
  async index(req, res) {
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true }
    })

    if (!isProvider) {
      return res.status(401).json('Current user is not a provider')
    }

    // Formatando a data para a query
    const { date } = req.query
    const parsedDate = parseISO(date)

    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)]
        }
      },
      order: ['date'],
      attributes: ['id', 'date'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email']
        }
      ]
    })

    return res.json(appointments)
  }
}

export default new ScheduleController()
