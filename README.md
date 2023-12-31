# Namaste React 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differntial Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - Remove Unused Code
- Different Dev and Production Bundles

# Components we need to build our Food Ordering App

- Header
- Logo
- Nav Items
- Body
  - Search
  - RestaurantContainer
  - RestaurantCard
    - Card Image
    - Info
- Footer
  - Copyright
  - Links
  - Contact
  - Address

# Two types of Export Import

1. Default Export Import

- export default Component;
- import Component from "path";

2. Named export import

- export const Component;
- import {Component} from "path";

# React Hooks

- Two Most Important Hooks
- useState() - A state variable
- useEffect()

# Two types of Routing

- Client Side Routing
- Server Side Routing

# Redux Toolkit and React Redux

- npm install
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of Testing (Developer)

- Unit testing
- Integration testing
- End 2 End testing (E2E)

# Setting up testing

- Installed React-testing-library
- Installed jest
- Installed Babel dep(from jest website)
- Created a config file for babel (babel.config.js)
- Created .parcelrc file to disable Babel transpilation in Parcel because it was conflicting with babel.config
- Jest Configuration (npx jest --init)
- Installed jsdom library
- Install @babel/preset-react (to enabel jsx for testing)
  - and also configure the babel.config file to be runtime : automatic in the preset.
- Install @testing-library/jest-dom to use matchers
