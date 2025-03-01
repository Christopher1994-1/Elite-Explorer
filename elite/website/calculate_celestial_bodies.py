
#. MODULE FOR CALCULATING THE CREDITS EARNED BY CELESTIAL BODY TYPE
# to find out where I got the numbers check here https://forums.frontier.co.uk/threads/exploration-value-formulae.232000/



#. AMMONIA WORLDS 
def calculate_ammonia_world(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring ammonia worlds

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    FSS = 143463
    FD = 229541
    DSS = 508019
    efficiency_bonus = 125609
    FM = 1110214
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total




#. EARTH LIKE WORLDS 
def calculate_earth_like_world(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Earth Like Worlds

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    FSS = 270290
    FD = 432463
    DSS = 957124
    FM = 2091685
    efficiency_bonus = 236654
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total




#. TERRAFORMABLE WATER WORLDS 
def calculate_terraformable_water_world(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Terraformable Water Worlds

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    FSS = 268616
    FD = 429784
    DSS = 951197
    FM = 2078731
    efficiency_bonus = 235188
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total




#. WATER WORLDS 
def calculate_water_world(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Water Worlds

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    FSS = 99747
    FD = 159596
    DSS = 353217
    FM = 771912
    efficiency_bonus = 87333
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if terraformable == 'true':
        number = calculate_terraformable_water_world(number_of_worlds, dss, '', fm, fd, meb, all)
        return number
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total





#. TERRAFORMABLE HIGH METAL CONTENT PLANET
def calculate_terraformable_high_metal_content_planet(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Terraformable High Metal Content Planet

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    FSS = 163948
    FD = 262316
    DSS = 580557
    FM = 1268741
    efficiency_bonus = 143546
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total
    



#. HIGH METAL CONTENT PLANET
def calculate_high_metal_content_planet(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring High Metal Content Planet

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    FSS = 99747
    FD = 159596
    DSS = 353217
    FM = 771912
    efficiency_bonus = 87333
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if terraformable == 'true':
        number = calculate_terraformable_high_metal_content_planet(number_of_worlds, dss, '', fm, fd, meb, all)
        return number
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total





#. METAL RICH BODY
def calculate_metal_rich_body(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Metal Rich Body

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    FSS = 31632
    FD = 50612
    DSS = 112015
    FM = 244794
    efficiency_bonus = 27695
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total




#. ICY BODY
def calculate_icy_body(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring ICY BODY

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    FSS = 500
    FD = 800
    DSS = 1185
    FM = 2691
    efficiency_bonus = 577
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total






#. TERRAFORMABLE ROCKY BODY
def calculate_terraformable_rocky_body(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Terraformable Rocky Body

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    FSS = 129504
    FD = 207207
    DSS = 458590
    FM = 1002193
    efficiency_bonus = 113388
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total
    





#. ROCKY BODY
def calculate_icy_body(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Rocky Body

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    
    FSS = 500
    FD = 800
    DSS = 1067
    FM = 2491
    efficiency_bonus = 603
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    if terraformable == 'true':
        number = calculate_terraformable_rocky_body(number_of_worlds, dss, '', fm, fd, meb, all)
        return number
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total





#. ROCKY ICE BODY
def calculate_rocky_ice_body(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Rocky Ice Body

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    
    FSS = 500
    FD = 800
    DSS = 1418
    FM = 3087
    efficiency_bonus = 528
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total




#. CLASS I GAS GIANT
def calculate_gas_giant_class_one(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Class I Gas Giant

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    
    FSS = 3845
    FD = 6152
    DSS = 13616
    FM = 29756
    efficiency_bonus = 3367
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total







#. CLASS II GAS GIANT
def calculate_gas_giant_class_two(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Class II Gas Giant

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    
    FSS = 28405
    FD = 45448
    DSS = 100586
    FM = 219818
    efficiency_bonus = 24870
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total





#. CLASS III GAS GIANT
def calculate_gas_giant_class_three(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Class III Gas Giant

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    
    FSS = 995
    FD = 1592
    DSS = 3523
    FM = 7699
    efficiency_bonus = 871
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total







#. CLASS IV GAS GIANT
def calculate_gas_giant_class_four(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Class IV Gas Giant

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    
    FSS = 1119
    FD = 1791
    DSS = 3963
    FM = 8661
    efficiency_bonus = 980
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total









#. CLASS V GAS GIANT
def calculate_gas_giant_class_five(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Class V Gas Giant

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    
    FSS = 966
    FD = 1544
    DSS = 3418
    FM = 7472
    efficiency_bonus = 846
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total






#. GAS GIANT AMMONIA BASED LIFE
def calculate_gas_giant_ammonia_life(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Gas Giant Ammonia based Life

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    
    FSS = 774
    FD = 1240
    DSS = 2744
    FM = 5993
    efficiency_bonus = 677
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total






#. GAS GIANT WATER BASED LIFE
def calculate_gas_giant_water_life(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Gas Giant water based Life

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    
    FSS = 883
    FD = 1412
    DSS = 3126
    FM = 6833
    efficiency_bonus = 773
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total





#. HELIUM RICH GAS GIANT
def calculate_gas_giant_rich_helium(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Helium-Rich Gas Giant

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    
    FSS = 900
    FD = 1439
    DSS = 3186
    FM = 6963
    efficiency_bonus = 788
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total





#. WATER GIANT
def calculate_water_giant(number_of_worlds: int, dss:str, terraformable:str, fm:str, fd:str, meb:str, all:str) -> int:
    """calculating the return credits for exploring Water Giant

    Args:
        number_of_worlds (int): number of worlds discovered
        fss (bool): Full Spectrum System Scanner activated boolean
        fd (bool): First Discovery Bonus boolean
        dss (bool): Detailed Surface Scanner boolean
        ef (bool): DSS mapped with efficiency bonus boolean
        fm (bool): First Mapped Bonus boolean

    Returns:
        int: total credits earned
    """
    
    
    FSS = 667
    FD = 1067
    DSS = 2362
    FM = 5161
    efficiency_bonus = 584
    
    
    total_sum: list = [FSS]
    
    if not number_of_worlds:
        return 0
    
    
    if all == 'true':
        total_sum.extend([FD, DSS, FM, efficiency_bonus])
        total = sum(total_sum) * number_of_worlds
        return total
        
        
    if fd == 'true':
        total_sum.append(FD)
    
    if dss == 'true':
        total_sum.append(DSS)
    
    if meb == 'true':
        total_sum.append(efficiency_bonus)
    
    if fm == 'true':
        total_sum.append(FM)
    
    
    total = sum(total_sum) * number_of_worlds
    
    
    return total

