(function() {var implementors = {
"exclusive_cell":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"exclusive_cell/struct.CallOnceError.html\" title=\"struct exclusive_cell::CallOnceError\">CallOnceError</a>"]],
"hashbrown":[["impl&lt;'a, K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, V:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, S, A:&nbsp;Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"hashbrown/hash_map/struct.OccupiedError.html\" title=\"struct hashbrown::hash_map::OccupiedError\">OccupiedError</a>&lt;'a, K, V, S, A&gt;"]],
"lock_api":[["impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"lock_api/struct.MutexGuard.html\" title=\"struct lock_api::MutexGuard\">MutexGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"lock_api/struct.MappedMutexGuard.html\" title=\"struct lock_api::MappedMutexGuard\">MappedMutexGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, G:&nbsp;<a class=\"trait\" href=\"lock_api/trait.GetThreadId.html\" title=\"trait lock_api::GetThreadId\">GetThreadId</a> + 'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"lock_api/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;"],["impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, G:&nbsp;<a class=\"trait\" href=\"lock_api/trait.GetThreadId.html\" title=\"trait lock_api::GetThreadId\">GetThreadId</a> + 'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"lock_api/struct.MappedReentrantMutexGuard.html\" title=\"struct lock_api::MappedReentrantMutexGuard\">MappedReentrantMutexGuard</a>&lt;'a, R, G, T&gt;"],["impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"lock_api/struct.RwLockReadGuard.html\" title=\"struct lock_api::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"lock_api/struct.RwLockWriteGuard.html\" title=\"struct lock_api::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLockUpgrade.html\" title=\"trait lock_api::RawRwLockUpgrade\">RawRwLockUpgrade</a> + 'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"lock_api/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;"],["impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"lock_api/struct.MappedRwLockWriteGuard.html\" title=\"struct lock_api::MappedRwLockWriteGuard\">MappedRwLockWriteGuard</a>&lt;'a, R, T&gt;"]],
"log":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"log/enum.Level.html\" title=\"enum log::Level\">Level</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"log/enum.LevelFilter.html\" title=\"enum log::LevelFilter\">LevelFilter</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"log/struct.SetLoggerError.html\" title=\"struct log::SetLoggerError\">SetLoggerError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"log/struct.ParseLevelError.html\" title=\"struct log::ParseLevelError\">ParseLevelError</a>"]],
"rand_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"rand_core/struct.Error.html\" title=\"struct rand_core::Error\">Error</a>"]],
"raw_cpuid":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"raw_cpuid/enum.Associativity.html\" title=\"enum raw_cpuid::Associativity\">Associativity</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"raw_cpuid/struct.VendorInfo.html\" title=\"struct raw_cpuid::VendorInfo\">VendorInfo</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"raw_cpuid/struct.CacheInfo.html\" title=\"struct raw_cpuid::CacheInfo\">CacheInfo</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"raw_cpuid/enum.CacheType.html\" title=\"enum raw_cpuid::CacheType\">CacheType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"raw_cpuid/enum.TopologyType.html\" title=\"enum raw_cpuid::TopologyType\">TopologyType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"raw_cpuid/enum.ExtendedRegisterType.html\" title=\"enum raw_cpuid::ExtendedRegisterType\">ExtendedRegisterType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"raw_cpuid/enum.ExtendedRegisterStateLocation.html\" title=\"enum raw_cpuid::ExtendedRegisterStateLocation\">ExtendedRegisterStateLocation</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"raw_cpuid/enum.DatType.html\" title=\"enum raw_cpuid::DatType\">DatType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"raw_cpuid/struct.SoCVendorBrand.html\" title=\"struct raw_cpuid::SoCVendorBrand\">SoCVendorBrand</a>"]],
"shell_words":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"shell_words/struct.ParseError.html\" title=\"struct shell_words::ParseError\">ParseError</a>"]],
"smoltcp":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/iface/struct.SocketHandle.html\" title=\"struct smoltcp::iface::SocketHandle\">SocketHandle</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/socket/enum.TcpState.html\" title=\"enum smoltcp::socket::TcpState\">State</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/storage/struct.Assembler.html\" title=\"struct smoltcp::storage::Assembler\">Assembler</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/time/struct.Instant.html\" title=\"struct smoltcp::time::Instant\">Instant</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/time/struct.Duration.html\" title=\"struct smoltcp::time::Duration\">Duration</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/pretty_print/struct.PrettyIndent.html\" title=\"struct smoltcp::wire::pretty_print::PrettyIndent\">PrettyIndent</a>"],["impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"smoltcp/wire/pretty_print/trait.PrettyPrint.html\" title=\"trait smoltcp::wire::pretty_print::PrettyPrint\">PrettyPrint</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/pretty_print/struct.PrettyPrinter.html\" title=\"struct smoltcp::wire::pretty_print::PrettyPrinter\">PrettyPrinter</a>&lt;'a, T&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.ArpPacket.html\" title=\"struct smoltcp::wire::ArpPacket\">Packet</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.ArpRepr.html\" title=\"enum smoltcp::wire::ArpRepr\">Repr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.EthernetProtocol.html\" title=\"enum smoltcp::wire::EthernetProtocol\">EtherType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.EthernetAddress.html\" title=\"struct smoltcp::wire::EthernetAddress\">Address</a>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.EthernetFrame.html\" title=\"struct smoltcp::wire::EthernetFrame\">Frame</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.Icmpv4Message.html\" title=\"enum smoltcp::wire::Icmpv4Message\">Message</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.Icmpv4DstUnreachable.html\" title=\"enum smoltcp::wire::Icmpv4DstUnreachable\">DstUnreachable</a>"],["impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Icmpv4Packet.html\" title=\"struct smoltcp::wire::Icmpv4Packet\">Packet</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.Icmpv4Repr.html\" title=\"enum smoltcp::wire::Icmpv4Repr\">Repr</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.Icmpv6Message.html\" title=\"enum smoltcp::wire::Icmpv6Message\">Message</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.Icmpv6DstUnreachable.html\" title=\"enum smoltcp::wire::Icmpv6DstUnreachable\">DstUnreachable</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.Icmpv6ParamProblem.html\" title=\"enum smoltcp::wire::Icmpv6ParamProblem\">ParamProblem</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.Icmpv6TimeExceeded.html\" title=\"enum smoltcp::wire::Icmpv6TimeExceeded\">TimeExceeded</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.IpVersion.html\" title=\"enum smoltcp::wire::IpVersion\">Version</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.IpProtocol.html\" title=\"enum smoltcp::wire::IpProtocol\">Protocol</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.IpAddress.html\" title=\"enum smoltcp::wire::IpAddress\">Address</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.IpCidr.html\" title=\"enum smoltcp::wire::IpCidr\">Cidr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.IpEndpoint.html\" title=\"struct smoltcp::wire::IpEndpoint\">Endpoint</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Ipv4Address.html\" title=\"struct smoltcp::wire::Ipv4Address\">Address</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Ipv4Cidr.html\" title=\"struct smoltcp::wire::Ipv4Cidr\">Cidr</a>"],["impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Ipv4Packet.html\" title=\"struct smoltcp::wire::Ipv4Packet\">Packet</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Ipv4Repr.html\" title=\"struct smoltcp::wire::Ipv4Repr\">Repr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Ipv6Address.html\" title=\"struct smoltcp::wire::Ipv6Address\">Address</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Ipv6Cidr.html\" title=\"struct smoltcp::wire::Ipv6Cidr\">Cidr</a>"],["impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Ipv6Packet.html\" title=\"struct smoltcp::wire::Ipv6Packet\">Packet</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Ipv6Repr.html\" title=\"struct smoltcp::wire::Ipv6Repr\">Repr</a>"],["impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Ipv6FragmentHeader.html\" title=\"struct smoltcp::wire::Ipv6FragmentHeader\">Header</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Ipv6FragmentRepr.html\" title=\"struct smoltcp::wire::Ipv6FragmentRepr\">Repr</a>"],["impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Ipv6HopByHopHeader.html\" title=\"struct smoltcp::wire::Ipv6HopByHopHeader\">Header</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Ipv6HopByHopRepr.html\" title=\"struct smoltcp::wire::Ipv6HopByHopRepr\">Repr</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.Ipv6OptionType.html\" title=\"enum smoltcp::wire::Ipv6OptionType\">Type</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.Ipv6OptionFailureType.html\" title=\"enum smoltcp::wire::Ipv6OptionFailureType\">FailureType</a>"],["impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Ipv6Option.html\" title=\"struct smoltcp::wire::Ipv6Option\">Ipv6Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.Ipv6OptionRepr.html\" title=\"enum smoltcp::wire::Ipv6OptionRepr\">Repr</a>&lt;'a&gt;"],["impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.Ipv6RoutingHeader.html\" title=\"struct smoltcp::wire::Ipv6RoutingHeader\">Header</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.Ipv6RoutingRepr.html\" title=\"enum smoltcp::wire::Ipv6RoutingRepr\">Repr</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.NdiscOptionType.html\" title=\"enum smoltcp::wire::NdiscOptionType\">Type</a>"],["impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.NdiscOption.html\" title=\"struct smoltcp::wire::NdiscOption\">NdiscOption</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.NdiscOptionRepr.html\" title=\"enum smoltcp::wire::NdiscOptionRepr\">Repr</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.TcpSeqNumber.html\" title=\"struct smoltcp::wire::TcpSeqNumber\">SeqNumber</a>"],["impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.TcpPacket.html\" title=\"struct smoltcp::wire::TcpPacket\">Packet</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.TcpRepr.html\" title=\"struct smoltcp::wire::TcpRepr\">Repr</a>&lt;'a&gt;"],["impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.UdpPacket.html\" title=\"struct smoltcp::wire::UdpPacket\">Packet</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.UdpRepr.html\" title=\"struct smoltcp::wire::UdpRepr\">Repr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/wire/enum.HardwareAddress.html\" title=\"enum smoltcp::wire::HardwareAddress\">HardwareAddress</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"smoltcp/wire/struct.RawHardwareAddress.html\" title=\"struct smoltcp::wire::RawHardwareAddress\">RawHardwareAddress</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"smoltcp/enum.Error.html\" title=\"enum smoltcp::Error\">Error</a>"]],
"time":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"time/struct.Date.html\" title=\"struct time::Date\">Date</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"time/error/struct.ComponentRange.html\" title=\"struct time::error::ComponentRange\">ComponentRange</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"time/error/struct.ConversionRange.html\" title=\"struct time::error::ConversionRange\">ConversionRange</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"time/error/struct.DifferentVariant.html\" title=\"struct time::error::DifferentVariant\">DifferentVariant</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"time/error/struct.InvalidVariant.html\" title=\"struct time::error::InvalidVariant\">InvalidVariant</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"time/error/enum.Error.html\" title=\"enum time::error::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"time/enum.Month.html\" title=\"enum time::Month\">Month</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"time/struct.OffsetDateTime.html\" title=\"struct time::OffsetDateTime\">OffsetDateTime</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"time/struct.PrimitiveDateTime.html\" title=\"struct time::PrimitiveDateTime\">PrimitiveDateTime</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"time/struct.Time.html\" title=\"struct time::Time\">Time</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"time/struct.UtcOffset.html\" title=\"struct time::UtcOffset\">UtcOffset</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"time/enum.Weekday.html\" title=\"enum time::Weekday\">Weekday</a>"]],
"x86":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"x86/bits32/paging/struct.PAddr.html\" title=\"struct x86::bits32::paging::PAddr\">PAddr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"x86/bits32/paging/struct.IOAddr.html\" title=\"struct x86::bits32::paging::IOAddr\">IOAddr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"x86/bits32/paging/struct.VAddr.html\" title=\"struct x86::bits32::paging::VAddr\">VAddr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"x86/bits64/paging/struct.PAddr.html\" title=\"struct x86::bits64::paging::PAddr\">PAddr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"x86/bits64/paging/struct.IOAddr.html\" title=\"struct x86::bits64::paging::IOAddr\">IOAddr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"x86/bits64/paging/struct.VAddr.html\" title=\"struct x86::bits64::paging::VAddr\">VAddr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"x86/irq/struct.InterruptDescription.html\" title=\"struct x86::irq::InterruptDescription\">InterruptDescription</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"x86/irq/struct.PageFaultError.html\" title=\"struct x86::irq::PageFaultError\">PageFaultError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"x86/segmentation/struct.SegmentSelector.html\" title=\"struct x86::segmentation::SegmentSelector\">SegmentSelector</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"x86/segmentation/struct.Descriptor.html\" title=\"struct x86::segmentation::Descriptor\">Descriptor</a>"]],
"x86_64":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"x86_64/structures/paging/mapper/enum.InvalidPageTable.html\" title=\"enum x86_64::structures::paging::mapper::InvalidPageTable\">InvalidPageTable</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"x86_64/structures/paging/page/struct.AddressNotAligned.html\" title=\"struct x86_64::structures::paging::page::AddressNotAligned\">AddressNotAligned</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()