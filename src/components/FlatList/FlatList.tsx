import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {FlatListType} from './interface';
import {Loader} from '../';

const FlatListComponent = <T,>({
  data,
  keyExtractor,
  renderItem,
  onEndReached,
  numColumns,
  showLoader,
}: FlatListType<T>) => {
  const {width} = Dimensions.get('window');
  return (
    <View style={{...styles.centerContainer, width: width * 0.9}}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.4}
        ListFooterComponent={showLoader && <Loader />}
        showsVerticalScrollIndicator={false}
        numColumns={numColumns}
      />
    </View>
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
