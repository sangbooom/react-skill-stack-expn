import React from 'react';
import Todo from './Todo';
import TestRenderer from 'react-test-renderer';

describe("todolist test", () => {
    let component: any = null;

    it('Todo render ', () => {
        component = TestRenderer.create(<Todo />)
    })

    it('onSubmitHandler() test', () => {
        component.getInstance().setTodoInput('밥먹기')
        component.getInstance().onSubmitHandler()
        expect(component.getInstance().todo)
        .toEqual([{ id: 1, text: '밥먹기', checked: false }]) 
    })
})