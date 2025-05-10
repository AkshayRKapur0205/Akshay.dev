import React from 'react';
import { Table } from 'antd';
import './FlexTable.css';

const FlexTable = () => {
  const columns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: 150,
    },
    {
      title: 'Technology',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Years of Experience',
      dataIndex: 'yoe',
      key: 'yoe',
      width: 180,
    },
    {
      title: 'Proficiency',
      dataIndex: 'proficiency',
      key: 'proficiency',
      width: 150,
    },
  ];

  const data = [
    { key: '1', category: 'Framework', name: 'React', yoe: 1, proficiency: 'Intermediate' },
    { key: '2', category: 'Framework', name: 'Angular', yoe: 1, proficiency: 'Intermediate' },
    { key: '3', category: 'Framework', name: 'Unreal Engine 5', yoe: 2, proficiency: 'Advanced' },
    { key: '4', category: 'Framework', name: 'Spring', yoe: 1, proficiency: 'Intermediate' },
    { key: '5', category: 'Framework', name: 'Docker', yoe: 1, proficiency: 'Intermediate' },
    { key: '6', category: 'Framework', name: 'Kubernetes', yoe: 1, proficiency: 'Intermediate' },
    { key: '7', category: 'Tool', name: 'Unity', yoe: 1, proficiency: 'Intermediate' },
    { key: '8', category: 'Tool', name: 'Splunk', yoe: 1, proficiency: 'Intermediate' },
    { key: '9', category: 'Tool', name: 'OpenCV', yoe: 1, proficiency: 'Intermediate' },
    { key: '10', category: 'Tool', name: 'Tesseract-OCR', yoe: 1, proficiency: 'Intermediate' },
    { key: '11', category: 'Tool', name: 'Git', yoe: 3, proficiency: 'Advanced' },
    { key: '12', category: 'Tool', name: 'Aseprite', yoe: 1, proficiency: 'Intermediate' },
    { key: '13', category: 'Cloud', name: 'AWS', yoe: 1, proficiency: 'Intermediate' },
    { key: '14', category: 'Tool', name: 'Jenkins', yoe: 1, proficiency: 'Intermediate' },
    { key: '15', category: 'Language', name: 'JavaScript', yoe: 2, proficiency: 'Advanced' },
    { key: '16', category: 'Language', name: 'React', yoe: 1, proficiency: 'Intermediate' },
    { key: '17', category: 'Language', name: 'Node.js', yoe: 1, proficiency: 'Intermediate' },
    { key: '18', category: 'Language', name: 'Python', yoe: 5, proficiency: 'Advanced' },
    { key: '19', category: 'Language', name: 'Java', yoe: 6, proficiency: 'Advanced' },
    { key: '20', category: 'Language', name: 'C++', yoe: 3, proficiency: 'Advanced' },
    { key: '21', category: 'Language', name: 'C#', yoe: 2, proficiency: 'Advanced' },
    { key: '22', category: 'Language', name: 'HTML/CSS', yoe: 2, proficiency: 'Advanced' },
    { key: '23', category: 'Language', name: 'Swift', yoe: 2, proficiency: 'Intermediate' },
    { key: '24', category: 'Language', name: 'PHP', yoe: 1, proficiency: 'Intermediate' },
    { key: '25', category: 'Language', name: 'MATLAB', yoe: 1, proficiency: 'Intermediate' },
    { key: '26', category: 'Language', name: 'Rust', yoe: 1, proficiency: 'Intermediate' },
    { key: '27', category: 'Language', name: 'Haskell', yoe: 1, proficiency: 'Intermediate' },
    { key: '28', category: 'Language', name: 'OCaml', yoe: 1, proficiency: 'Intermediate' },
  ];
  

  return (
    <div className="flex-table-container">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 750, x: 'max-content' }} // scrollable
        className="custom-ant-table"
      />
    </div>
  );
};

export default FlexTable;
