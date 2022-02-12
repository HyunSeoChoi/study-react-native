/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Platform,
  PermissionsAndroid,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import ImagePicker, {
  LaunchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import Contacts from 'react-native-contacts';

class App extends Component {
  state = {
    myContacts: [],
  };

  async requestContactPermission() {
    if (Platform.OS === 'ios') {
      console.warn('ios');
      return true;
    } else {
      console.warn('Android');
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      ]);

      if (
        granted['android.permission.READ_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        return true;
      } else return false;
    }
  }

  getContacts = () => {
    this.requestContactPermission().then(didGetPermission => {
      if (didGetPermission) {
        Contacts.getAll()
          .then(contacts => {
            this.setState({
              myContacts: contacts,
            });
          })
          .catch(e => {});
      } else {
        alert('no permission');
      }
    });
  };

  addContacts = () => {
    this.requestContactPermission().then(didGetPermission => {
      if (didGetPermission) {
        const newContact = {
          emailAddress: [
            {
              label: 'work',
              email: 'aaaa@example.com',
            },
          ],
          familyName: 'Go',
          givenName: 'Gildong',
          phoneNumbers: [
            {
              label: 'mobile',
              number: '(010) 1111-1111',
            },
          ],
        };

        Contacts.addContact(newContact)
          .then(() => {
            this.getContacts();
          })
          .catch(err => {
            throw err;
          });
      } else {
        alert('no permission');
      }
    });
  };

  openForm = () => {
    Contacts.openContactForm({}).catch(err => {
      if (err) console.warn(err);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.myContacts.map((item, idx) => (
          <Text>
            {item.givenName} {item.familyName}
          </Text>
        ))}

        <Button title="Load Contacts" onPress={() => this.getContacts()} />
        <Button title="Add Contacts" onPress={() => this.addContacts()} />
        <Button title="Open Form" onPress={() => this.openForm()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e4ab26',
  },
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default App;
