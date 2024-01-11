module.exports = {
    // Other webpack configurations...
  
    module: {
      rules: [
        // Other rules...
  
        {
          test: /\.(glb|gltf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'models/', // Adjust the output path as needed
              },
            },
          ],
        },
      ],
    },
  };
  