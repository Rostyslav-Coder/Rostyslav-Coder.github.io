// Skills Data File

import { v4 as uuid_4 } from 'uuid';
import python from '../assets/skills-img/python.png';
import javaScript from '../assets/skills-img/javaScript.png';
import postgreSQL from '../assets/skills-img/postgresql.png';
import postman from '../assets/skills-img/postman.png';
import fastAPI from '../assets/skills-img/fastapi.png';
import nodeJS from '../assets/skills-img/node-js.png';
import mySQL from '../assets/skills-img/mysql.png';
import git from '../assets/skills-img/git.png';
import django from '../assets/skills-img/django.png';
import react from '../assets/skills-img/react.png';
import docker from '../assets/skills-img/docker.png';
import gitHub from '../assets/skills-img/github.png';
import celery from '../assets/skills-img/celery.png';
import html from '../assets/skills-img/html.png';
import vite from '../assets/skills-img/vite.png';
import swagger from '../assets/skills-img/swagger.png';
import redis from '../assets/skills-img/redis.png';
import css from '../assets/skills-img/css.png';
import npm from '../assets/skills-img/npm.png';
import figma from '../assets/skills-img/figma.png';

const SKILLS = [
	{ id: uuid_4(), url: python, name: 'Python' },
	{ id: uuid_4(), url: javaScript, name: 'JavaScript' },
	{ id: uuid_4(), url: postgreSQL, name: 'PostgreSQL' },
	{ id: uuid_4(), url: postman, name: 'Postman' },
	{ id: uuid_4(), url: fastAPI, name: 'FastAPI' },
	{ id: uuid_4(), url: nodeJS, name: 'NodeJS' },
	{ id: uuid_4(), url: mySQL, name: 'MySQL' },
	{ id: uuid_4(), url: git, name: 'Git' },
	{ id: uuid_4(), url: django, name: 'Django' },
	{ id: uuid_4(), url: react, name: 'React' },
	{ id: uuid_4(), url: docker, name: 'Docker' },
	{ id: uuid_4(), url: gitHub, name: 'GitHub' },
	{ id: uuid_4(), url: celery, name: 'Celery' },
	{ id: uuid_4(), url: html, name: 'HTML' },
	{ id: uuid_4(), url: vite, name: 'Vite' },
	{ id: uuid_4(), url: swagger, name: 'Swagger' },
	{ id: uuid_4(), url: redis, name: 'Redis' },
	{ id: uuid_4(), url: css, name: 'CSS' },
	{ id: uuid_4(), url: npm, name: 'NPM' },
	{ id: uuid_4(), url: figma, name: 'Figma' },
];

export default SKILLS;
