import Sequelize from 'sequelize'

const url = 'http://localhost:3333'

class File extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${url}/files/${this.path}`
          }
        }
      },
      {
        sequelize
      }
    )

    return this
  }
}

export default File
