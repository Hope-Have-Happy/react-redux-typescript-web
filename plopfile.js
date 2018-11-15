module.exports = function(plop) {
  plop.setGenerator('React Component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'prompt',
        name: 'componentName',
        message: 'Name of your component:',
      },
      {
        type: 'confirm',
        name: 'stateless',
        message: 'Do you want the component to be stateless?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'connected',
        message: 'Do you want the component to be connected to Redux?',
        default: true,
      },
    ],
    actions: ({ stateless, connected }) => {
      const actions = [
        {
          type: 'add',
          path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.test.tsx',
          templateFile: './config/plop/component/component.test.tsx.plop',
        },
      ];

      if (stateless) {
        actions.push({
          type: 'add',
          path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx',
          templateFile: './config/plop/component/component.stateless.tsx.plop',
        });
      } else {
        actions.push({
          type: 'add',
          path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx',
          templateFile: './config/plop/component/component.tsx.plop',
        });
      }

      if (connected) {
        actions.push({
          type: 'add',
          path: './src/components/{{pascalCase componentName}}/index.tsx',
          templateFile: './config/plop/component/index.connected.tsx.plop',
        });
      } else {
        actions.push({
          type: 'add',
          path: './src/components/{{pascalCase componentName}}/index.tsx',
          templateFile: './config/plop/component/index.unconnected.tsx.plop',
        });
      }

      return actions;
    },
  });

  plop.setGenerator('React Container', {
    description: 'Create a new React container',
    prompts: [
      {
        type: 'prompt',
        name: 'containerName',
        message: 'Name of your container:',
      },
      {
        type: 'confirm',
        name: 'stateless',
        message: 'Do you want the container to be stateless?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'connected',
        message: 'Do you want the container to be connected to Redux?',
        default: true,
      },
    ],
    actions: ({ stateless, connected }) => {
      const actions = [
        {
          type: 'add',
          path: './src/containers/{{pascalCase containerName}}/{{pascalCase containerName}}.test.tsx',
          templateFile: './config/plop/container/container.test.tsx.plop',
        },
      ];

      if (stateless) {
        actions.push({
          type: 'add',
          path: './src/containers/{{pascalCase containerName}}/{{pascalCase containerName}}.tsx',
          templateFile: './config/plop/container/container.stateless.tsx.plop',
        });
      } else {
        actions.push({
          type: 'add',
          path: './src/containers/{{pascalCase containerName}}/{{pascalCase containerName}}.tsx',
          templateFile: './config/plop/container/container.tsx.plop',
        });
      }

      if (connected) {
        actions.push({
          type: 'add',
          path: './src/containers/{{pascalCase containerName}}/index.tsx',
          templateFile: './config/plop/container/index.connected.tsx.plop',
        });
      } else {
        actions.push({
          type: 'add',
          path: './src/containers/{{pascalCase containerName}}/index.tsx',
          templateFile: './config/plop/container/index.unconnected.tsx.plop',
        });
      }

      return actions;
    },
  });

  plop.setGenerator('Redux Reducer', {
    description: 'Generate a new Redux reducer (reducer, actions …)',
    prompts: [
      {
        type: 'prompt',
        name: 'reducerName',
        message: 'Name of your reducer (without the word "reducer" in it, such as "Calendar Event")',
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: './src/reducers/{{pascalCase reducerName}}/actions.ts',
          templateFile: './config/plop/reducer/actions.ts.plop',
        },
        {
          type: 'add',
          path: './src/reducers/{{pascalCase reducerName}}/actions.test.tsx',
          templateFile: './config/plop/reducer/actions.test.tsx.plop',
        },
        {
          type: 'add',
          path: './src/reducers/{{pascalCase reducerName}}/reducer.ts',
          templateFile: './config/plop/reducer/reducer.ts.plop',
        },
        {
          type: 'add',
          path: './src/reducers/{{pascalCase reducerName}}/reducer.test.tsx',
          templateFile: './config/plop/reducer/reducer.test.tsx.plop',
        },
        {
          type: 'add',
          path: './src/reducers/{{pascalCase reducerName}}/types.ts',
          templateFile: './config/plop/reducer/types.ts.plop',
        },
        {
          type: 'add',
          path: './src/reducers/{{pascalCase reducerName}}/index.ts',
          templateFile: './config/plop/reducer/index.ts.plop',
        },
      ];

      return actions;
    },
  });
};
