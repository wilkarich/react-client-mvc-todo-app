import React from 'react';
import moment from "moment";

import {useDispatch} from "react-redux";
import {useTypedSelector} from "hooks/useTypedSelector";
import {deleteTask, performTask} from "store/actions/taskActions";

import {Table, Box, Button, Space} from "components";

import {sortDateCompare} from "helpers/sortDateCompare";
import {getFilteredTasks} from "helpers/getFilteredTasks";

function TasksCurrent() {
    const dispatch = useDispatch();
    const categories = useTypedSelector(state => state.categories.categories);
    const filterCategoryId = useTypedSelector(state => state.filteredTasks.categoryId);
    const currentTasks =
        useTypedSelector(state => state.tasks.tasks.filter(task => !task.completed))
            .sort(sortDateCompare("deadline"));
    const filteredCompletedTasks = getFilteredTasks(currentTasks, filterCategoryId);

    const columns = [
        {
            name: "Name",
            width: 30,
            key: 1,
        },
        {
            name: "Category",
            width: 25,
            key: 2
        },
        {
            name: "Deadline",
            width: 25,
            key: 3
        },
        {
            name: "Action",
            width: 20,
            key: 4
        }
    ];

    return (
        <Box>
            <h2>Current tasks</h2>
            <Table columns={columns}>
                {filteredCompletedTasks?.map(task =>
                    <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{!isNaN(task.categoryId as number) ? categories.find(category => category.id === task.categoryId)?.name : null}</td>
                        <td>{task.deadline ? moment(task.deadline).format("DD.MM.YYYY HH:mm") : null}</td>
                        <td>
                            <Space direction="horizontal">
                                <Button
                                    size="small"
                                    styleType="secondary"
                                    onClick={() => dispatch(performTask(task.id))}
                                >Perform</Button>
                                <Button
                                    size="small"
                                    styleType="secondary"
                                    onClick={() => dispatch(deleteTask(task.id))}
                                >Delete</Button>
                            </Space>
                        </td>
                    </tr>
                )}
            </Table>
        </Box>
    );
}

export default TasksCurrent;