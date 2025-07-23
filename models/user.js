'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			// One-to-many association
			User.hasMany(models.Course, {
				foreignKey: 'userId'
			});
		}
	}
	
	User.init({
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: { msg: 'First name is required' }
			}
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: { msg: 'Last name is required' }
			}
		},
		emailAddress: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true, // Extra credit
			validate: {
				notEmpty: { msg: 'Email address is required' },
				isEmail: { msg: 'Please provide a valid email address' } // Extra credit
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: { msg: 'Password is required' }
			}
		}
	}, {
		sequelize,
		modelName: 'User',
	});
	
	return User;
};
