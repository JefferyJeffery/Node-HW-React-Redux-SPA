(
  export PKG=eslint-config-airbnb;
  yarn info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG"
)


#https://github.com/eslint/eslint/issues/7338
 #yarn add --dev eslint-config-airbnb eslint@^3.9.1 eslint-plugin-jsx-a11y@^2.2.3 eslint-plugin-import@^2.1.0 eslint-plugin-react@^6.6.0
