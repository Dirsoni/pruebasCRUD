import React from 'react';
import { Car, carProps } from '../../types/Car';
import { deleteCar } from '../../utils/deleteCar';
import { navigate } from '../../utils/navigate';
import Button from '../Button';

import CarItem from '../CarItem';


const CarsList = ({ car }: any) => {
  return (
    <table>
        <thead>
    <tr>
      <th>NAME</th>
      <th>MODEL</th>
      <th>COLOR</th>
      <th>DESCRIPCION</th>
      <th>ACCIONES</th>
    </tr>
  </thead>
    <tbody>
      
       {car.map((c: Car) => (
        
        <tr key={c.uuid}>
        <td>{c.name}</td>
        <td>{c.model}</td>
        <td>{c.color}</td>
        <td>{c.description}</td>
        <td><Button
          onClick={navigate}
          label="Editar"
          param={{ link: `/car/update/${c.uuid}` }}
        />
        {/* <Button
          onClick={navigate}
          label="Asignar"
          param={{ link: '/car/create' }}
        /> */}
        <Button
        onClick={deleteCar}
        label="Eliminar"
        param={c}
      /></td>
      </tr>
         //<CarItem car={c} key={c.uuid}></CarItem>
         
       ))}
       <td>
        <tr></tr>
        <tr></tr>
        </td>   
      </tbody>  
    </table>
    
    // <div>
    //   {car.map((c: Car) => (
    //     <CarItem car={c} key={c.uuid}></CarItem>
    //   ))}
    // </div>
  );
};

export default CarsList;
