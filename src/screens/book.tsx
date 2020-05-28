import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {GoogleBook} from 'src/api/books';

type Props = {
  book: GoogleBook;
};
export function BookDetails({book}: Props) {
  return (
    <ScrollView>
      <View style={styles.book}>
        <View>
          <Text style={styles.bookTitle}>{book.volumeInfo.title}</Text>
          <Text style={styles.bookAuthor}>
            By&nbsp;{book.volumeInfo.authors}
          </Text>
        </View>
        <Image
          resizeMethod="auto"
          resizeMode="contain"
          source={{uri: book.volumeInfo.imageLinks.thumbnail}}
          style={styles.bookImage}
        />

        <Text style={styles.bookDescription}>
          {book.volumeInfo.description}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  book: {
    padding: 8,
  },

  bookImage: {
    height: 200,
    width: 100,
    alignSelf: 'center',
  },
  bookTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  bookAuthor: {
    paddingVertical: 8,
  },
  bookDescription: {
    paddingVertical: 16,
    lineHeight: 22,
  },
});
