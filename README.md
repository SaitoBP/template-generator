# Template Generator

A simple tool to generate a template for a new project.

## Using a template

First we need to run the `npx template-generator` command to generate a template.

Them we will be prompted to enter the name of the project, the name will also reflect the name of the folder that will be created.

After that we need to choose one of the available templates, the available templates are:

- rest-client
- graphql-client

After choosing the template, a new folder will be created with the name of the project and the template files will be copied to the folder.

Now we can run the `yarn install` command to install the dependencies and are set to start coding.

## Creating a new template

To create a new template we need to create a folder following the pattern `template-<template-name>`.

Then we need to update the `templates.ts`file with the new template name, description, key and color.

All the files inside the template folder will be copied to the project folder.