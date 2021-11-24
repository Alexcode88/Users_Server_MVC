const express = require( 'express' );
const {APIController} = require( './../controllers/apiController' );
const APIRouter = express.Router();

APIRouter
    .route( '/users' )
    .get( APIController.getAllUsers )
    .post( APIController.addNewUser );

APIRouter
    .delete( '/users/delete/:userName', APIController.deleteUser );

APIRouter
    .put( '/users/update/:userName', APIController.updateUser );

module.exports = { APIRouter };