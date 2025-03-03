

    

    
    
    
    
    
    
    
def calculate_individual_values(name, fss, fss_fd, fss_dss, fss_dss_fm, fss_dss_fm_fd):
    fd = fss_fd - fss  # First Discovery bonus
    dss = fss_dss - fss  # Basic scan and mapping
    fm = fss_dss_fm - fss_dss  # First Mapped bonus
    fd_fm_total = fss_dss_fm_fd - fss_dss_fm  # FD + Mapped with Efficiency bonus
    mapped_with_efficiency = fd_fm_total - fd  # Extract Efficiency bonus
    
    ds = dss - mapped_with_efficiency

    return_statement = f"""
    {name}\n
    FSS (Basic scan): {fss}\n
    FD (First Discovered): {fd}\n
    DSS (Scan without mapping bonus): {ds}\n
    FM (First Mapping): {fm}\n
    Mapped with Efficiency bonus: {mapped_with_efficiency}
    
    """
    return return_statement




# # # # # Example usage with Ammonia World values
title = "High Metal Content World"
data = calculate_individual_values(title, 14070, 36581, 76211, 185092, 219923)
print(data)



# # a = calculate_T_water_worlds(1, True, True, True, True, True)
# # print(a)



