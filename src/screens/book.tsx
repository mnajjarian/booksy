import React from 'react';
import {View, Text, ScrollView, Image, ImageStyle} from 'react-native';
import {GoogleBook} from '../api/books';
import {NavigationComponent} from '../navigation';
import {styleSheetFactory} from '../themes';
import {useTheme} from 'react-native-themed-styles';

type BookDetailsProps = {
  book: GoogleBook;
};

const themeStyles = styleSheetFactory((theme) => ({
  book: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 16,
    height: 250,
  },
  bookTitles: {
    paddingLeft: 8,
    paddingRight: 16,
    flex: 1,
  },
  bookTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: theme.textColor,
  },
  bookAuthor: {
    color: theme.textColor,
  },
  bookBackgraound: {
    width: '100%',
    height: 250,
    position: 'absolute',
  },
  bookImage: {
    height: 200,
    width: 150,
    marginLeft: 8,
  },
  bookDescription: {
    marginTop: 8,
    fontSize: 12,
    color: theme.textColor,
    overflow: 'hidden',
  },
}));
export const BookDetails: NavigationComponent<BookDetailsProps> = ({book}) => {
  const [styles] = useTheme(themeStyles);
  return (
    <ScrollView>
      <View style={styles.book}>
        <Image
          resizeMode="cover"
          blurRadius={10}
          source={{uri: book.volumeInfo.imageLinks.thumbnail}}
          style={styles.bookBackgraound as ImageStyle}
        />
        <Image
          resizeMethod="auto"
          resizeMode="contain"
          source={{uri: book.volumeInfo.imageLinks.thumbnail}}
          style={styles.bookImage as ImageStyle}
        />
        <View style={styles.bookTitles}>
          <Text style={styles.bookTitle}>{book.volumeInfo.title}</Text>
          <Text style={styles.bookAuthor}>
            By&nbsp;{book.volumeInfo.authors}
          </Text>
          <Text
            style={styles.bookDescription}
            numberOfLines={10}
            textBreakStrategy="simple"
            ellipsizeMode="tail">
            {book.volumeInfo.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

BookDetails.options = (props) => ({
  topBar: {
    title: {
      text: props?.book.volumeInfo.title,
    },
  },
});
