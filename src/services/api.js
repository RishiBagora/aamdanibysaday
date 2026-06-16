const API_URL =
  "https://script.google.com/macros/s/AKfycbwR9nS-pnoeo1FbRZ1mfw-PP81up3KPpGishh0K3g35wSolSOhVPRiv3u1-XUr5MSxK-Q/exec";

export const getProducts = async () => {
  try {
    const res = await fetch(
      `${API_URL}?type=Products`
    );

    const json = await res.json();

    if (!json.success) {
      throw new Error(
        "Failed to fetch products"
      );
    }

    return json.data.map((item) => ({
      ...item,

      price: Number(item.price || 0),

      comparePrice: Number(
        item.comparePrice || 0
      ),

      stock: Number(item.stock || 0),

      featuredHome:
        String(item.featured)
          .toLowerCase() === "true",

      isNew:
        String(item.isNew)
          .toLowerCase() === "true",

      images: item.images
        ? item.images
            .split(",")
            .map((img) => img.trim())
        : [],

      processImages:
        item.processImages
          ? item.processImages
              .split(",")
              .map((img) => img.trim())
          : [],

      tags: item.tags
        ? item.tags
            .split(",")
            .map((tag) => tag.trim())
        : [],
    }));
  } catch (error) {
    console.error(error);

    return [];
  }
};

export const getSettings = async () => {
  try {
    const res = await fetch(
      `${API_URL}?type=Settings`
    );

    const json = await res.json();

    if (!json.success) {
      throw new Error(
        "Failed to fetch settings"
      );
    }

    const settings = {};

    json.data.forEach((item) => {
      settings[item.key] = item.value;
    });

    return settings;
  } catch (error) {
    console.error(error);

    return {};
  }
};