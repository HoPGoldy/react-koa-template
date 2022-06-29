import React, { useState, useEffect } from "react"
import { demoGet, demoPost, TodoTask } from "../services/demo"

const RequestDemo = () => {
    const [newTask, setNewTask] = useState('')
    const [taskList, setTaskList] = useState<TodoTask[]>([])

    const fetchTaskList = async () => {
        const { data } = await demoGet()
        data && setTaskList(data)
    }

    useEffect(() => {
        fetchTaskList()
    }, [])

    const submitNewTask = async (taskContent: string) => {
        const { data } = await demoPost(taskContent)
        setNewTask('')
        data && setTaskList(data)
    }

    const onClickEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;
        submitNewTask((e.target as HTMLInputElement).value)
    }

    const renderTask = (taskDetail: TodoTask) => {
        return (
            <div key={taskDetail.id}>
                <span className="font-bold mr-2">[{taskDetail.id}]</span>
                <span className="mr-2 cursor-pointer text-blue-500">完成</span>
                <span className="mr-2 cursor-pointer text-red-500">删除</span>
                <span>{taskDetail.content}</span>
            </div>
        )
    }

    return (
        <div className="w-80 m-auto text-left">
            添加新待办：
            <input
                value={newTask}
                onInput={e => setNewTask((e.target as HTMLInputElement).value)}
                onKeyUp={onClickEnter}
                placeholder="按回车确认"
            />
            <div className="mt-4">
                {taskList.map(renderTask)}
            </div>
        </div>
    )
}

export default RequestDemo