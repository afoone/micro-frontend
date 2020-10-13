import { v4 as uuid } from 'uuid'

const options = {
    menu: [
        {
            id: uuid(),
            title: "Ver Perrito",
            to: "/dog"
        }
    ]
}

export default options