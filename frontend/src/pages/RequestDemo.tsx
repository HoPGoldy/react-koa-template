import { useState } from "react"
import { demoGet, demoPost } from "../services/demo"

const RequestDemo = () => {
    const [newTask, setNewTask] = useState('')

    const submitNewTask = async (taskContent: string) => {
        console.log('taskContent', taskContent)
        const resp = await demoPost(taskContent)
        console.log('resp', resp)
    }

    const onClickEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            submitNewTask((e.target as HTMLInputElement).value)
        }
    }

    return (
        <div>
            <input
                value={newTask}
                onInput={e => setNewTask((e.target as HTMLInputElement).value)}
                onKeyUp={onClickEnter}
                placeholder="输入新的代办，按回车确认"
            />

        </div>
    )
}

export default RequestDemo