import React, { useState, useCallback } from "react";
import { Text, StyleSheet, Image, View, Pressable, Modal } from "react-native";
import Frame11 from "./Frame1";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const CategoriesIconAndText = () => {
  const [categoriesIconAndTextVisible, setCategoriesIconAndTextVisible] =
    useState(false);

  const openCategoriesIconAndText = useCallback(() => {
    setCategoriesIconAndTextVisible(true);
  }, []);

  const closeCategoriesIconAndText = useCallback(() => {
    setCategoriesIconAndTextVisible(false);
  }, []);

  return (
    <>
      <Pressable
        style={styles.categoriesIconAndText}
        onPress={openCategoriesIconAndText}
      >
        <Text style={styles.categories}>Categories</Text>
        <Image
          style={styles.iconlycurvedcategory}
          resizeMode="cover"
          source={require("../assets/iconlycurvedcategory.png")}
        />
      </Pressable>

      <Modal
        animationType="fade"
        transparent
        visible={categoriesIconAndTextVisible}
      >
        <View style={styles.categoriesIconAndTextOverlay}>
          <Pressable
            style={styles.categoriesIconAndTextBg}
            onPress={closeCategoriesIconAndText}
          />
          <Frame11 onClose={closeCategoriesIconAndText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  categoriesIconAndTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  categoriesIconAndTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  categories: {
    top: "60.98%",
    left: "0%",
    fontSize: FontSize.smallBodyTextLight12_size,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  iconlycurvedcategory: {
    height: "58.54%",
    width: "38.1%",
    top: "0%",
    right: "31.75%",
    bottom: "41.46%",
    left: "30.16%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  categoriesIconAndText: {
    width: 63,
    height: 41,
  },
});

export default CategoriesIconAndText;
