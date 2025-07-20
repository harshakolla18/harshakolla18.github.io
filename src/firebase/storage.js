import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
import { storage } from "./config";

// Upload a file to Firebase Storage
export const uploadFile = async (file, path) => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

// Upload an image with automatic path generation
export const uploadImage = async (file, folder = "images") => {
  try {
    const timestamp = Date.now();
    const fileName = `${timestamp}_${file.name}`;
    const path = `${folder}/${fileName}`;
    return await uploadFile(file, path);
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// Upload resume
export const uploadResume = async (file) => {
  try {
    const path = `resume/${file.name}`;
    return await uploadFile(file, path);
  } catch (error) {
    console.error("Error uploading resume:", error);
    throw error;
  }
};

// Get download URL for a file
export const getFileURL = async (path) => {
  try {
    const storageRef = ref(storage, path);
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error("Error getting file URL:", error);
    throw error;
  }
};

// Delete a file from Firebase Storage
export const deleteFile = async (path) => {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
    return true;
  } catch (error) {
    console.error("Error deleting file:", error);
    throw error;
  }
};

// List all files in a folder
export const listFiles = async (folder) => {
  try {
    const folderRef = ref(storage, folder);
    const result = await listAll(folderRef);
    return result.items.map((item) => item.name);
  } catch (error) {
    console.error("Error listing files:", error);
    throw error;
  }
};
