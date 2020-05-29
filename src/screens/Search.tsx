import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  ImageStyle,
} from 'react-native';
import {useNavigationSearchBarUpdate} from 'react-native-navigation-hooks';
import {searchBooks, GoogleBook} from '../api/books';
import {useDebounce} from '@react-hook/debounce';
import {NavigationComponent, NavigateTo} from '../navigation';
import {Routes} from './routes';
import {styleSheetFactory} from '../themes';
import {useTheme} from 'react-native-themed-styles';

const themeStyles = styleSheetFactory((theme) => ({
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
    color: theme.textColor,
  },
  image: {
    height: 150,
    width: 200,
  },
}));

const SearchScreen: NavigationComponent = ({componentId}) => {
  const [query, setQuery] = useDebounce('', 500);
  const [books, setBooks] = useState<GoogleBook[]>([]);

  const [styles] = useTheme(themeStyles);
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

  const navigateToBookDetails = (book: GoogleBook) =>
    NavigateTo(componentId, Routes.BookDetails, {
      book,
    });

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
                style={styles.image as ImageStyle}
              />
              <Text style={styles.listTitle}>{book.volumeInfo.title}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    </ScrollView>
  );
};

SearchScreen.options = () => ({
  topBar: {
    title: {
      text: 'Search!',
    },
    searchBar: true,
    searchBarHiddenWhenScrolling: true,
    searchBarPlaceholder: 'search by Title, Author or ISBN...',
  },
});

export default SearchScreen;
