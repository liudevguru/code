import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
  },
  socialButtonContainer: {
    marginTop: 10,
    paddingHorizontal: 40,
  },
  hyperlink: {
    color: '#707070',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  hyperlinkText: {
    color: '#707070',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 50,
  },
  footer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  stickView: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 50,
  },
});
