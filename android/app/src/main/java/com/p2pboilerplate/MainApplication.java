// package com.p2pboilerplate;

// import android.app.Application;

// import com.facebook.react.ReactApplication;
// import com.reactnativenavigation.NavigationReactPackage;
// import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
// import com.rnfs.RNFSPackage;
// import com.bitgo.randombytes.RandomBytesPackage;
// import com.peel.react.TcpSocketsModule;
// import com.peel.react.rnos.RNOSModule;
// import com.staltz.reactnativenode.RNNodePackage;
// import com.facebook.react.ReactNativeHost;
// import com.facebook.react.ReactPackage;
// import com.facebook.react.shell.MainReactPackage;
// import com.facebook.soloader.SoLoader;

// import java.util.Arrays;
// import java.util.List;

// public class MainApplication extends Application implements ReactApplication {

//   private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
//     @Override
//     public boolean isDebug() {
//       return BuildConfig.DEBUG;
//     }

//     protected List<ReactPackage> getPackages() {
//       return Arrays.<ReactPackage>asList(
//           new MainReactPackage(),
//             new NavigationReactPackage(),
//             new RNI18nPackage(),
//             new TcpSocketsModule(),
//             new RNFSPackage(),
//             new RandomBytesPackage(),
//             new RNNodePackage(),
//             new RNOSModule()
//       );
//     }

//     @Override
//     public List<ReactPackage> createAdditionalReactPackages() {
//       return getPackages();
//     }

//     @Override
//     protected String getJSMainModuleName() {
//       return "index";
//     }
//   };

//   @Override
//   public ReactNativeHost getReactNativeHost() {
//     return mReactNativeHost;
//   }

//   @Override
//   public void onCreate() {
//     super.onCreate();
//     SoLoader.init(this, /* native exopackage */ false);
//   }
// }


package com.p2pboilerplate;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.peel.react.TcpSocketsModule;
import com.peel.react.rnos.RNOSModule;
import com.rnfs.RNFSPackage;
import com.bitgo.randombytes.RandomBytesPackage;
import com.staltz.reactnativenode.RNNodePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new RNI18nPackage(),
      new VectorIconsPackage(),
      new TcpSocketsModule(),
      new RNOSModule(),
      new RNFSPackage(),
      new RandomBytesPackage(),
      new RNNodePackage()
    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }
}
