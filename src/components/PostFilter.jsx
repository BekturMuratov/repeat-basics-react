import React from 'react'
import MyInput from './UI/Input/MyInput';
import MySelect from './UI/select/MySelect';

export default function PostFilter({filter,setFilter}) {
    return (
   <div>
            <MyInput
        placeholder="Поиск"
        onChange ={e => setFilter({...filter, query:e.target.value})}
        value={filter.query}
        />
        <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
        defaultValue="сортировка"
        option={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
        />
   </div>
    )
}
