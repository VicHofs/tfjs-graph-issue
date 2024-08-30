import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import * as customModel from './models/custom-model';

const models = {
  'custom-model': {
    name: 'custom-model',
    type: 'graph',
    model: customModel.model,
    weights: customModel.weights,
    classNames: customModel.classNames,
  },
};

export const loadModel = async (name: keyof typeof models) => {
  console.log('loading model...');
  const model =
    models[name].type === 'layers'
      ? await tf.loadLayersModel(
          bundleResourceIO(
            models[name].model as tf.io.ModelJSON,
            models[name].weights,
          ),
        )
      : await tf.loadGraphModel(
          bundleResourceIO(
            models[name].model as tf.io.ModelJSON,
            models[name].weights,
          ),
        );

  console.log('Model loaded!');
  return model;
};
