# How to run this example

## Setup

### Clone locally

```bash
git clone <url>
```

### Install dependencies

#### yarn

```bash
# from repo directory
yarn
```

#### npm

```bash
# from repo directory
npm install
```

### Add a large graph model binary to `/tensorflow/models/custom-model`

#### Files to add (from `tensorflowjs_converter`)

- `group1-shard.bin`
- `model.json`

## Build and run the app

### Prebuild

#### yarn

```bash
yarn expo prebuild --platform android --clean
```

#### npm

```bash
npx expo prebuild --platform android --clean
```

### Run

#### yarn

```bash
yarn expo run:android
```

#### npm

```bash
npx expo run:android
```
