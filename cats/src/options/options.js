import { v4 as uuid } from 'uuid'

const options = {
    menu: [
        {
            id: uuid(),
            title: "Ver Gatito",
            to: "/cat"
        }
    ]
}

export default options