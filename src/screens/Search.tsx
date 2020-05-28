import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {useNavigationSearchBarUpdate} from 'react-native-navigation-hooks';
import {searchBooks, GoogleBook} from '../api/books';
import {Navigation} from 'react-native-navigation';

function SearchScreen({componentId}: {componentId: string}) {
  const [query, setQuery] = useState<string>('');
  const [books, setBooks] = useState<GoogleBook[]>([]);

  useNavigationSearchBarUpdate((e) => {
    if (e.isFocused) {
      setQuery(e.text);
    } else {
      setQuery('');
    }
  }, componentId);
  useEffect(() => {
    if (query === '') {
      return;
    } else {
      searchBooks(query).then((res) => {
        setBooks(res.items);
      });
    }
  }, [query]);
  if (books.length < 1) {
    return <View />;
  }

  const navigateToBookDetails = (book: GoogleBook) => {
    Navigation.push(componentId, {
      component: {
        name: 'app.Booksy.BookDetails',
        passProps: {
          book,
        },
        options: {
          topBar: {
            title: {
              text: book.volumeInfo.title,
            },
          },
        },
      },
    });
  };

  const bookList = books.filter((book) => book.volumeInfo.imageLinks);
  return (
    <ScrollView>
      <View style={styles.listContainer}>
        {bookList.map((book) => (
          <TouchableHighlight
            onPress={() => navigateToBookDetails(book)}
            key={book.id}
            style={styles.listItem}>
            <View>
              <Image
                source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.listTitle}>{book.volumeInfo.title}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listItem: {
    width: '50%',
    alignItems: 'center',
    marginBottom: 16,
  },
  listTitle: {
    marginTop: 8,
    color: 'black',
  },
  image: {
    height: 150,
    width: 200,
  },
});
export default SearchScreen;
